import os
import fileinput

FIND = "<p>The background image was created by Prof. <a href=\"http://math.mit.edu/~dyatlov/\">Semyon Dyatlov</a>,<br/>"
REPLACE = ""

for path, dirs, files in os.walk("."):
    for filename in files:
        if ".html" not in filename:
            break
        print(filename)
        fullpath = os.path.join(path, filename)
        with fileinput.FileInput(fullpath, inplace=True, backup='.bak') as file:
            for line in file:
                print(line.replace(FIND, REPLACE), end='')
