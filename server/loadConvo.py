import sys

def main():
    filePath = sys.argv[1]
    fin = open(filePath,"r")
    temp = fin.readline()
    history = []
    while(temp != ""):
        print(temp)
        history.append(temp)
        temp = fin.readline()
    fin.close()
    sys.stdout.flush()
if __name__ == "__main__":
    main()
