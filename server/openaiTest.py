from openai import OpenAI
client = OpenAI()
userText = "whatever"
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