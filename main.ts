from ai_chatbot import ChatBot

# Create a new chatbot instance
chatbot = ChatBot()

# Start chatting
print("AI Chatbot: Hello! I am your AI chatbot. How can I assist you today?")
while True:
    user_input = input("You: ").strip().lower()

if user_input == 'exit':
    print("AI Chatbot: Goodbye!")
break

response = chatbot.generate_response(user_input)
print("AI Chatbot:", response)

