from re import search
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
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
        driver = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe') 
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

    text = "쌀밥" # 번역 버튼이 눌리면 텍스트를 전달 받아야 함.
    input = driver.find_element_by_class_name('n_input')
    input.send_keys(text)

    search=driver.find_element_by_class_name('n_btn_search')
    search.click()

    onevideo=driver.find_element_by_class_name('hand_btn_play').click()

    content=driver.find_element_by_class_name('content_view_dis')

    imageload=content.find_elements_by_class_name('mCS_img_loaded')
    image=[]
    for i in imageload:
        print("이미지 : ",i) #이미지 확인용 
        print("\n") #확인용 줄바꿈
        image.append(i)
    print("리스트 : " ,image) #이미지 리스트 확인용

    tooltip2s=content.find_elements_by_tag_name('dd')
    list1=list(tooltip2s)
    dt=list1[1]
    message=dt.text #텍스트 값
    print("text : ",message) #텍스트 확인용
    
    print("완료") # 확인용
    print("머지") # 확인용 
    driver.close()
    driver.quit()

crawl()
print("실행완료") # 확인용