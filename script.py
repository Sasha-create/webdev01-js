# import requests

# def fetch_document_content(url):
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.text
#     else:
#         raise Exception("Could not retrieve document content.")

# def parse_document_content(content):
#     data = []
#     for line in content.strip().splitlines():
#         print(f"Processing line: {line}")  # Debugging line
#         char, x, y = line.strip().split()
#         data.append((char, int(x), int(y)))
#     return data

# def create_grid(data):
#     # Determine grid size based on the max x and y values
#     max_x = max(entry[1] for entry in data)
#     max_y = max(entry[2] for entry in data)
    
#     # Initialize grid filled with spaces
#     grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
    
#     # Place each character in the grid at the correct coordinates
#     for char, x, y in data:
#         grid[y][x] = char
    
#     return grid

# def print_grid(grid):
#     for row in grid:
#         print("".join(row))

# def decode_secret_message(url):
#     content = fetch_document_content(url)
#     data = parse_document_content(content)
#     grid = create_grid(data)
#     print_grid(grid)

# #decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub")

# url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
# secret_message = decode_secret_message(url)
# print(secret_message)
import requests
from bs4 import BeautifulSoup

def fetch_document_content(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        raise Exception("Could not retrieve document content.")

def parse_document_content(content):
    # Use BeautifulSoup to parse the HTML content
    soup = BeautifulSoup(content, 'html.parser')
    data = []
    
    # Find the table or relevant data section
    table = soup.find('table')  # Assuming the data is in a <table>
    
    if table:
        rows = table.find_all('tr')
        for row in rows[1:]:  # Skip the header row
            cols = row.find_all('td')
            if len(cols) == 3:  # Expecting three columns
                char = cols[0].text.strip()
                x_str = cols[1].text.strip()
                y_str = cols[2].text.strip()
                
                # Try converting to integers and handle errors
                try:
                    x = int(x_str)
                    y = int(y_str)
                    data.append((char, x, y))
                except ValueError:
                    print(f"Skipping invalid entry: char='{char}', x='{x_str}', y='{y_str}'")  # Debugging line
    else:
        raise Exception("No table found in the document.")

    return data

def create_grid(data):
    # Determine grid size based on the max x and y values
    if not data:  # Check if data is empty
        return []

    max_x = max(entry[1] for entry in data)
    max_y = max(entry[2] for entry in data)
    
    # Initialize grid filled with spaces
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
    
    # Place each character in the grid at the correct coordinates
    for char, x, y in data:
        grid[y][x] = char
    
    return grid

def extract_uppercase_letters(grid):
    secret_message = ''
    for row in grid:
        for char in row:
            if char.isupper():  # Check if the character is uppercase
                secret_message += char
    return secret_message

def decode_secret_message(url):
    content = fetch_document_content(url)
    data = parse_document_content(content)
    grid = create_grid(data)
    secret_message = extract_uppercase_letters(grid)
    return secret_message

# Example URL for the document
url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
secret_message = decode_secret_message(url)
print(secret_message)

import sys

# Define valid characters
VALID_CHARS = {'█', '░'}  # assuming these are the only valid characters

def process_input(data):
    for entry in data:
        try:
            # Attempt to parse the entry
            parts = entry.strip().split(',')
            if len(parts) != 3:
                print(f"Invalid entry format, expected 3 parts, got {len(parts)}: {entry}")
                continue
            
            char = parts[0].strip()
            x = int(parts[1].strip())
            y = int(parts[2].strip())
            
            # Check if the character is valid
            if char not in VALID_CHARS:
                print(f"Skipping invalid entry: char='{char}', x='{x}', y='{y}'")
                continue
            
            # Process the valid entry (for demonstration purposes, just print it)
            print(f"Valid entry: char='{char}', x='{x}', y='{y}'")
            
        except ValueError as ve:
            print(f"ValueError encountered: {ve} for entry: {entry}")
        except Exception as e:
            print(f"An unexpected error occurred: {e} for entry: {entry}")

if __name__ == "__main__":
    # Read from stdin if no input file is provided
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r') as f:
            data = f.readlines()
    else:
        data = sys.stdin.readlines()
    
    process_input(data)
    
#Secret Message:
#THESEARETHEFINALWORDS