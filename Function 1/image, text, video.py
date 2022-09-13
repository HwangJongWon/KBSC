from re import search
import time
from time import sleep
from typing import DefaultDict
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup, BeautifulStoneSoup
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
import chromedriver_autoinstaller
import urllib.request
import cv2 as cv

def crawl():
    options = webdriver.ChromeOptions()
    options.add_argument("--incognito")
    options.add_argument("--window-size=1920x1080")
    options.add_argument('--disable-extensions')
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    chrome_ver = chromedriver_autoinstaller.get_chrome_version().split('.')[0]  #크롬드라이버 버전 확인

    try:
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    except:
        chromedriver_autoinstaller.install(True)
        driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe') 

    url="https://sldict.korean.go.kr/front/main/main.do"
    driver.get(url)
    driver.implicitly_wait(10) 

    # 번역 버튼이 눌리면 텍스트 값을 받아 들여야 함.
    # 텍스트 입력
    text = "쌀밥" # 번역 버튼이 눌리면 텍스트를 전달 받아야 함.
    input=driver.find_element(By.CLASS_NAME, 'n_input')    
    input.send_keys(text)

    # 버튼 클릭
    search=driver.find_element(By.CLASS_NAME, 'n_btn_search')
    search.click()

    # 콘텐츠 조회 (이미지, 텍스트)
    try:
        onevideo=driver.find_element(By.CLASS_NAME, 'hand_btn_play').click()
    except:
        print("찾으시는 결과가 없습니다.")
        return
    content=driver.find_element(By.CLASS_NAME, 'content_view_dis')
    
    # 이미지 리스트 생성 후 웹크롤링 이미지 요소를 추가
    imageload=content.find_elements(By.CLASS_NAME, 'mCS_img_loaded')
    imagelist=[]
   
    for i in imageload:
        imagelist.append(i)

    # 이미지 저장
    path="C:/Users/smmc/Desktop/준영/4-1.5학기/KBSC022/Function 1/static/"
    for i in range(len(imagelist)):
        imageurl=imagelist[i].get_attribute("src")
        urllib.request.urlretrieve(imageurl,path+"image"+str(i+1)+".jpg")

    tooltip2s=content.find_elements(By.TAG_NAME, 'dd')
    list1=list(tooltip2s)
    dt=list1[1]
    message=dt.text #텍스트 값
    
    # 동영상 저장
    videolist=driver.find_elements(By.ID,'html5Video')
    video=videolist[0]
    video=video.find_element(By.XPATH,"/html/body/div[2]/div[2]/div/div/div[4]/form/div[3]/div[1]/div[1]/a/video/source[2]")
    video=video.get_attribute("src")
    urllib.request.urlretrieve(video,path+"video.mp4")

    sleep(5) #멈춤
    driver.close()
    driver.quit()

crawl()