from re import search
import time
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
from time import sleep
import ssl

# from app import fromtext
ssl._create_default_https_context = ssl._create_unverified_context

def crawl(dtojson):
    
    
    options = webdriver.ChromeOptions()
    options.add_argument("--incognito")
    options.add_argument("--window-size=1920x1080")
    options.add_argument('--disable-extensions')
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    chrome_ver = chromedriver_autoinstaller.get_chrome_version().split('.')[0]  #크롬드라이버 버전 확인

    try:
        # driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe')
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    except:
        chromedriver_autoinstaller.install(True)
        driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe') 

    tmptext=dtojson['text']
    
    textlist=tmptext[0].split(" ")
   
    
    # driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), chrome_options=options)
    count=0
    count1=0
    messagelist=[]
    for i in range(len(textlist)):
        
        url="https://sldict.korean.go.kr/front/main/main.do"
        driver.get(url)
        driver.implicitly_wait(2) 

        # 번역 버튼이 눌리면 텍스트 값을 받아 들여야 함.
        text = textlist[i]
        
        # text = "쌀밥" # 번역 버튼이 눌리면 텍스트를 전달 받아야 함.
        # input = driver.find_element_by_class_name('n_input')
        input=driver.find_element(By.CLASS_NAME, 'n_input')
        
        input.send_keys(text)
        
        # search=driver.find_element_by_class_name('n_btn_search')
        search=driver.find_element(By.CLASS_NAME, 'n_btn_search')
        # search.click()
        search.send_keys(Keys.ENTER)


        
        try:
            onevideo=driver.find_element(By.CLASS_NAME, 'tit')
            onevideo1=onevideo.find_element(By.TAG_NAME,'a')
            onevideo1.send_keys(Keys.ENTER)
        except:
            print("찾으시는 결과가 없습니다.")
            return
        
        content=driver.find_element(By.CLASS_NAME, 'content_view_dis')
        

        # 이미지 리스트 생성 후 웹크롤링 이미지 요소를 추가
        imageload=content.find_elements(By.CLASS_NAME, 'mCS_img_loaded')
        imagelist=[]
        
        
        for j in imageload:
            imagelist.append(j)
        
        # 이미지 저장
        path="/Users/hwangjong-won/Documents/kbsc1/ai/flask/static/"
        for k in range(len(imagelist)):
            imageurl=imagelist[k].get_attribute("src")
            urllib.request.urlretrieve(imageurl,path+"image"+str(count+1)+".jpg")
            count=count+1
        
        tooltip2s=content.find_elements(By.TAG_NAME, 'dd')
        list1=list(tooltip2s)
        dt=list1[1]
        message=dt.text #텍스트 값
        messagelist.append(message)
        
        # 동영상 저장
        videolist=driver.find_elements(By.ID,'html5Video')
        video=videolist[0]
        video=video.find_element(By.XPATH,"/html/body/div[2]/div[2]/div/div/div[4]/form/div[3]/div[1]/div[1]/a/video/source[2]")
        video=video.get_attribute("src")
        urllib.request.urlretrieve(video,path+"video"+str(count1+1)+".mp4")
        count1=count1+1
    
    
    
    
    
    driver.close()
    driver.quit()
    return imagelist, messagelist




print("실행완료") # 확인용

