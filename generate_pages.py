"""
Script to generate html pages by wrapping contents of pages (_[name].html files)
with base html file, replacing block phrase in base file with page content.
"""

import os

BASE_FILE = 'base.html'
BLOCK_PHRASE = '{% block %}'

def get_prefix_and_sufix(filename):
    prefix = ''
    sufix = ''

    with open(filename) as file:
        for line in file:
            if BLOCK_PHRASE in line:
                break
            prefix += line
        
        for line in file:
            sufix += line
    
    return prefix, sufix


prefix, sufix = get_prefix_and_sufix(BASE_FILE)
html_files = [file for file in os.listdir() if file[0] == '_']
print(html_files)

for file in html_files:
    content = prefix + open(file).read() + sufix

    with open(file[1:], 'w+') as new_file:
        new_file.write(content)
