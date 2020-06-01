from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())

# driver=webdriver.Chrome()
driver.implicitly_wait(3)
driver.get("http://localhost/Verko/skeliton/")
# js = 'alert("Hello World")'
# driver.execute_script(js)
# driver.execute_script(open("http://localhost/Verko/skeliton/script.js").read())