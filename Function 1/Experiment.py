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
    # 번역 버튼이 눌리면 텍스트를 전달 받아야 함.

    text = "쌀밥"
    input = driver.find_element_by_class_name('n_input')
    input.send_keys(text)

    search=driver.find_element_by_class_name('n_btn_search')
    search.click()

    onevideo=driver.find_element_by_class_name('hand_btn_play').click()


    dl=driver.find_element_by_class_name('content_view_dis')

    dd1=dl.find_element_by_tag_name('dd')
    for i in range(2):
        image=dd1.find_element_by_class_name('example')
        image1=dd1.find_element_by_tag_name('a')
        print("image : ",image)
        print("image1 : ",image1)
        print("type : ",type(image))
        print("type : ",type(image1))
        img

    print("완료")
    print("머지")
    driver.close()
    driver.quit()

crawl()
print("실행완료")