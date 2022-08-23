from django.shortcuts import render
from django.views.decorators import gzip
from django.http import StreamingHttpResponse
import cv2
import mediapipe as mp
import threading
from PIL import ImageFont, ImageDraw, Image            ## 설치  ( pip install pillow )
from hangul_utils import split_syllables, join_jamos
import numpy as np
import time

sum = []

font = ImageFont.truetype("./static/fonts/SCDream6.otf", 25)
        

mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands
cap = cv2.VideoCapture(0)
gesture = {
    0:"자세히",1:"보아야",2:"예쁘다",3:"오래",4:"사랑스럽다",5:"너도",6:"그렇다",7:"지우기"
}
gesture_en = {
    0:"detail", 1:"see", 2:"beautiful",3:"long",4:"lovely",5:"you",6:"sodo",7:"del"
}

file = np.genfromtxt('./data/worddata.csv', delimiter=',')
angle = file[:,:-1].astype(np.float32)
label = file[:, -1].astype(np.float32)

knn = cv2.ml.KNearest_create()              ## K-NN 알고리즘 객체 생성
knn.train(angle, cv2.ml.ROW_SAMPLE, label)  ## train, 행 단위 샘플

## 최대 1개의 손만 인식
max_num_hands = 2
with mp_hands.Hands(
    max_num_hands = max_num_hands,
    min_detection_confidence = 0.7,
    min_tracking_confidence = 0.7) as hands:

    while cap.isOpened():
        success, video = cap.read()
        if not success:
            continue

        flag = []
        prev_index = 0
        sentence = ''
        recognizeDelay = 0.1    
   
        video = cv2.cvtColor(cv2.flip(video, 1), cv2.COLOR_BGR2RGB)

        video.flags.writeable = False

        result = hands.process(video)
        
        video.flags.writeable = True
        video = cv2.cvtColor(video, cv2.COLOR_RGB2BGR)
        if result.multi_hand_landmarks is not None:      # 손 인식 했을 경우
            for res in result.multi_hand_landmarks:
                joint = np.zeros((21, 3))                 # 21개의 마디 부분 좌표 (x, y, z)를 joint에 저장
                for j,lm in enumerate(res.landmark):
                    joint[j] = [lm.x, lm.y, lm.z]
                # 벡터 계산
                v1 = joint[[0, 1, 2, 3, 0, 5, 6, 7, 0, 9, 10, 11, 0, 13, 14, 15, 0, 17, 18, 19],:]
                v2 = joint[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],:]
                v = v2 - v1

                # 벡터 길이 계산 (Normalize v)
                v = v / np.linalg.norm(v, axis=1)[:, np.newaxis]

                # arcos을 이용하여 15개의 angle 구하기
                angle = np.arccos(np.einsum('nt,nt->n',
                                            v[[0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18],:],
                                            v[[1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19],:]))

                angle = np.degrees(angle)  # radian 값을 degree로 변경

                data = np.array([angle], dtype=np.float32)

                ret, results,neighbours,dist = knn.findNearest(data,3)
                index = int(results[0][0])

                cv2.putText(video,gesture[index],
                (int(res.landmark[0].x * video.shape[1] - 10),
                int(res.landmark[0].y * video.shape[0] + 40)),
                cv2.FONT_HERSHEY_SIMPLEX, 1,(255,255,255),3)

                mp_drawing.draw_landmarks(video,res,mp_hands.HAND_CONNECTIONS)

        video = Image.fromarray(video)
        draw = ImageDraw.Draw(video)
        for i in sum:
            if i in sentence:
                pass
            else:
                sentence += " "
                sentence += i
            
        draw.text(xy=(20, 440), text = sentence, font=font, fill=(255, 255, 255))
        
        video = np.array(video)
        
        _, jpeg = cv2.imencode('.jpg', video)

        cv2.imshow('image', video)
        if cv2.waitKey(1) == ord('q'):
            break
cap.release()