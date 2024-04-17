import sys

def main():
    filePath = sys.argv[1]
    userIn = sys.argv[2]
    chatIn = sys.argv[3]
    fout = open(filePath,"a")
    fout.write("\n")
    fout.write(userIn)
    fout.write("\n")
    fout.write(chatIn)

    fout.close()
if __name__ == "__main__":
    main()
