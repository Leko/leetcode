# Read from the file file.txt and output the tenth line to stdout.
IFS=$'\n'
LINES=($(head -n 10 file.txt))
echo ${LINES[9]}
