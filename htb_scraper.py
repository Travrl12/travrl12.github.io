from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Path to ChromeDriver
CHROME_DRIVER_PATH = "C:/path_to_chromedriver/chromedriver.exe"

# Set Chrome options (optional, headless mode)
options = Options()
options.add_argument('--headless')  # Run in headless mode (no GUI)
options.add_argument('--disable-gpu')  # Disable GPU rendering
options.add_argument('--no-sandbox')

# Set up ChromeDriver service and WebDriver
service = Service(CHROME_DRIVER_PATH)
driver = webdriver.Chrome(service=service, options=options)

# Navigate to Hack The Box Starting Point page
driver.get("https://app.hackthebox.com/starting-point")

# Example: Find all task/machine cards under Starting Point
# Adjust the selectors based on the actual HTML structure of the page
machines = driver.find_elements_by_class_name("machine-card")  # Adjust this based on HTML

# List to store all Starting Point tasks/machines
starting_point_tasks = []

# Loop through each machine and extract its name (e.g., Meow, Fawn)
for machine in machines:
    name = machine.find_element_by_tag_name("h5").text  # Adjust this tag based on actual structure
    starting_point_tasks.append(name)

# Print the names of all Starting Point tasks/machines
print("Starting Point Tasks/Machines:", starting_point_tasks)

# Close the browser after we're done
driver.quit()

