#!/usr/bin/env python3
"""
Script to reorder the leadership section in temp_past_team.html
Moves Ezeani Dominic Tochukwu to the first position.
"""

import re

# Read the file with UTF-16LE encoding
file_path = r'c:\Users\pharm victor\Desktop\Coding\ispor_hoer\temp_past_team.html'

with open(file_path, 'r', encoding='utf-16-le') as f:
    content = f.read()

# Find the leadership section
# Look for patterns that might contain team member cards
print("Searching for 'dominic' (case-insensitive)...")
idx = content.lower().find('dominic')
if idx != -1:
    print(f"Found 'dominic' at position {idx}")
    print("\nContext around the match:")
    print("=" * 80)
    print(content[max(0, idx-500):idx+500])
    print("=" * 80)
else:
    print("'dominic' not found in the file")
    
# Also search for common leadership section markers
print("\nSearching for leadership section markers...")
for marker in ['leadership', 'team', 'president', 'executive']:
    idx = content.lower().find(marker)
    if idx != -1:
        print(f"\nFound '{marker}' at position {idx}")
