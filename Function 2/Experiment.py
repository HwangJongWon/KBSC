from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup, BeautifulStoneSoup
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def crawl():
    options = webdriver.ChromeOptions()
    options.add_argument("--incognito")
    options.add_argument("--window-size=1920x1080")
    options.add_argument('--disable-extensions')
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(
        executable_path = 'C:\\Users\\smmc\\Desktop\\chromedriver.exe',
        chrome_options=options    
        ) 

    #driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), chrome_options=options)

    driver.implicitly_wait(15)

    url="https://sldict.korean.go.kr/front/main/main.do"
    driver.get(url)
    driver.implicitly_wait(5) 

    print("머지")
crawl()
print("실행완료")