from openai import OpenAI
import sys
client = OpenAI()
def main():
    #return
    userText = " ".join(sys.argv[1:])
    stream = client.chat.completions.create(
      model = "gpt-3.5-turbo",
      messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": userText}
      ],
      stream = True,
    )

    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
            sys.stdout.flush()
if __name__ == "__main__":
    main()