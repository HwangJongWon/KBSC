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
    # 번역 버튼이 눌리면 텍스트를 전다 받아야 함.

    text = "안녕하세요"
    input = driver.find_element_by_class_name('n_input')
    input.send_keys(text)

    search=driver.find_element_by_class_name('n_btn_search')
    search.click()

    onevideo=driver.find_element_by_class_name('hand_btn_play')
    explanation=driver.find_element_by_class_name('tit')
    explanation1=explanation.find_element_by_tag_name('a')
    gettext=explanation1.text
    print(" text : ",gettext)
    print(type(gettext))
    print(gettext[0:10])

    time.sleep(5)

    print("머지")
crawl()
print("실행완료")