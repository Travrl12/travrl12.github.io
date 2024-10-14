import requests
from bs4 import BeautifulSoup

# Your Hack The Box Profile URL
HTB_PROFILE_URL = "https://app.hackthebox.com/profile/2105172"

def get_completed_machines():
    # Send GET request to fetch profile page HTML
    response = requests.get(HTB_PROFILE_URL)
    
    # Check if the page was fetched successfully
    if response.status_code != 200:
        print(f"Failed to retrieve profile page. Status Code: {response.status_code}")
        return []

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Example to find machine names on your profile
    # Adjust this according to your HTB profile's HTML structure
    machines = []
    for machine in soup.find_all('div', class_='machine-card'):
        name = machine.find('h5').text.strip()
        machines.append(name)
    
    return machines

def update_markdown_file(machines):
    # Full path to your index.markdown file
    file_path = 'C:/Users/travi_rpnq/OneDrive/Documents/GitHub/travrl12.github.io/index.markdown'
    
    # Read the existing content of the file
    with open(file_path, 'r') as file:
        content = file.readlines()

    # Find where to insert the new machines (using a placeholder comment in markdown)
    start_marker = '<!-- HTB Start -->\n'
    end_marker = '<!-- HTB End -->\n'

    start_index = content.index(start_marker) + 1
    end_index = content.index(end_marker)

    # Replace the section between the markers with the updated machine list
    content[start_index:end_index] = [f'<li>{machine}</li>\n' for machine in machines]

    # Write the updated content back to the file
    with open(file_path, 'w') as file:
        file.writelines(content)

if __name__ == '__main__':
    machines = get_completed_machines()
    if machines:
        update_markdown_file(machines)
        print("Markdown file updated with new HTB achievements.")
    else:
        print("No machines found or scraping failed.")
