#!/usr/bin/env python3
import re
import os

def split_sql_file(input_file, batch_size=100):
    """Split SQL file into batches of statements"""
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by INSERT statements
    statements = []
    current_statement = []
    lines = content.split('\n')
    
    in_statement = False
    for line in lines:
        if line.strip().startswith('INSERT INTO'):
            if current_statement and in_statement:
                statements.append('\n'.join(current_statement))
            current_statement = [line]
            in_statement = True
        elif in_statement:
            current_statement.append(line)
            if line.strip().endswith(';'):
                statements.append('\n'.join(current_statement))
                current_statement = []
                in_statement = False
    
    # Add last statement if exists
    if current_statement and in_statement:
        statements.append('\n'.join(current_statement))
    
    print(f"Found {len(statements)} SQL statements")
    
    # Split into batches
    batches = []
    for i in range(0, len(statements), batch_size):
        batch = statements[i:i + batch_size]
        batches.append(batch)
    
    return batches

if __name__ == "__main__":
    input_file = "scripts/complete-migration.sql"
    batches = split_sql_file(input_file, 100)
    
    print(f"Created {len(batches)} batches")
    for i, batch in enumerate(batches, 1):
        filename = f"batch_{i:03d}.sql"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write('\n\n'.join(batch))
        print(f"Batch {i}: {len(batch)} statements -> {filename}")