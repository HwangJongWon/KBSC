from re import search
import time
from time import sleep
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
        # driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe')
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    except:
        chromedriver_autoinstaller.install(True)
        driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe') 
    # driver = webdriver.Chrome(
    #     executable_path = 'C:\\Users\\smmc\\Desktop\\chromedriver.exe',
    #     chrome_options=options   
    #     ) 

    # driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), chrome_options=options)
    url="https://sldict.korean.go.kr/front/main/main.do"
    driver.get(url)
    driver.implicitly_wait(10) 

    # 번역 버튼이 눌리면 텍스트 값을 받아 들여야 함.

    text = "안녕" # 번역 버튼이 눌리면 텍스트를 전달 받아야 함.
    # input = driver.find_element_by_class_name('n_input')
    input=driver.find_element(By.CLASS_NAME, 'n_input')
    
    input.send_keys(text)

    # search=driver.find_element_by_class_name('n_btn_search')
    search=driver.find_element(By.CLASS_NAME, 'n_btn_search')
    search.click()
    # search.send_keys()

    # onevideo=driver.find_element_by_class_name('hand_btn_play').click()
    onevideo=driver.find_element(By.CLASS_NAME, 'hand_btn_play').click()

    # content=driver.find_element_by_class_name('content_view_dis')
    content=driver.find_element(By.CLASS_NAME, 'content_view_dis')

    # imageload=content.find_elements_by_class_name('mCS_img_loaded')
    imageload=content.find_elements(By.CLASS_NAME, 'mCS_img_loaded')
    image=[]
    for i in imageload:
        print("이미지 : ",i) #이미지 확인용 
        print("\n") #확인용 줄바꿈
        image.append(i)
    image1=image[0].get_attribute("src")
    image2=image[1].get_attribute("src")
    path="C:/Users/smmc/Desktop/준영/4-1.5학기/KBSC022/Function 1/static"
    urllib.request.urlretrieve(image1,path+"image1.jpg")
    urllib.request.urlretrieve(image2,path+"image2.jpg")

    print("리스트 : " ,image) #이미지 리스트 확인용

    # tooltip2s=content.find_elements_by_tag_name('dd')
    tooltip2s=content.find_elements(By.TAG_NAME, 'dd')
    list1=list(tooltip2s)
    dt=list1[1]
    message=dt.text #텍스트 값
    print("text : ",message) #텍스트 확인용
    
    print("완료") # 확인용
    print("머지") # 확인용 
    sleep(5) #멈춤
    driver.close()
    driver.quit()

crawl()
print("실행완료") # 확인용