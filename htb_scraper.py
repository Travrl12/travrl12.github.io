from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Path to ChromeDriver
CHROME_DRIVER_PATH = "C:/path_to_your_chromedriver/chromedriver.exe"

# Set Chrome options (optional, headless mode)
options = Options()
options.add_argument('--headless')  # Run headless (without a browser window)
options.add_argument('--disable-gpu')  # Disable GPU acceleration (optional)
options.add_argument('--no-sandbox')

# Set up ChromeDriver service and WebDriver
service = Service(CHROME_DRIVER_PATH)
driver = webdriver.Chrome(service=service, options=options)

# Navigate to Hack The Box or any URL you need to interact with
driver.get("https://app.hackthebox.com/starting-point")

# Example: Find elements (replace selectors with correct ones)
machines = driver.find_elements_by_class_name("machine-card")

# Print machine names (or interact as needed)
for machine in machines:
    print(machine.text)

# Close the browser when done
driver.quit()
