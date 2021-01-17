# Read from the file file.txt and print its transposed content to stdout.
N=$(head -n1 file.txt | wc -w)
for i in `seq 1 $N`; do cut -f"$i" -d ' ' file.txt | xargs; done
