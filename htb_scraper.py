import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

# Correct Path to GeckoDriver
GECKO_DRIVER_PATH = "/usr/local/bin/geckodriver"


# Set Chrome options (optional, headless mode)
options = Options()
options.add_argument('--headless')  # Run in headless mode (no GUI)
options.add_argument('--disable-gpu')  # Disable GPU rendering
options.add_argument('--no-sandbox')

# Set up ChromeDriver service and WebDriver
service = Service(CHROME_DRIVER_PATH)
driver = webdriver.Chrome(service=service, options=options)

# Your Hack The Box login details
HTB_USERNAME = "your_username"
HTB_PASSWORD = "your_password"

def login_htb():
    driver.get("https://app.hackthebox.com/login")
    time.sleep(2)  # Wait for page to load

    username_field = driver.find_element(By.NAME, "email")
    password_field = driver.find_element(By.NAME, "password")
    username_field.send_keys(HTB_USERNAME)
    password_field.send_keys(HTB_PASSWORD)

    login_button = driver.find_element(By.XPATH, "//button[contains(text(), 'Sign In')]")
    login_button.click()
    time.sleep(5)  # Wait for the login process to complete

def scrape_completed_machines():
    # Navigate to your profile activity page
    driver.get("https://app.hackthebox.com/profile/activity")
    time.sleep(3)  # Wait for the profile page to load

    activities = driver.find_elements(By.XPATH, "//div[contains(@class, 'activity-card')]")

    completed_machines = []

    for activity in activities:
        try:
            description = activity.find_element(By.CLASS_NAME, "activity-description").text
            if "Owned" in description:
                parts = description.split("-")
                achievement_type = parts[0].strip()
                machine_name = parts[1].strip()
                completed_machines.append({
                    "name": machine_name,
                    "achievement_type": achievement_type
                })
        except Exception as e:
            print(f"Error extracting data from activity: {e}")

    with open("htb_machines.json", "w") as json_file:
        json.dump(completed_machines, json_file, indent=4)

    print("HTB Machines data saved to 'htb_machines.json'.")

# Run the script
try:
    login_htb()
    scrape_completed_machines()
finally:
    driver.quit()

