import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatChatBot } from "../../../store/actionCreator/openAiCreator";
import User from "../card/messages/User";
import Bot from "../card/messages/Bot";
import ChatBotInput from "../input/ChatBotInput";
import Footer from "../footer";
import Warning from "../card/messages/Warning";
import Profile from "../card/messages/Profile";
import LoadingMessage from "../loading/LoadingMessage";

const ChatBotCom = () => {
  const messageContoh = {
    bot1: "Ada yang bisa aku bantu ?",
    bot2: "Namaku Ultra bestie : )",
    user: "Siapa nama kamu ?",
    dataProfile: [
        "https://ik.imagekit.io/bintangtopup/webGPT/Ultra.jpg?updatedAt=1685082766627",
        "Ultra Chats",
      ],
}

  const [userInput, setUserInput] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(null)
  const dispatcher = useDispatch();
  const chatOpenAi = useSelector((state) => state.openAi.chatOpenAi);
  const chatUserRef = useRef(null);

  useEffect(() => {
    chatUserRef.current.scrollTop = chatUserRef.current.scrollHeight;
  }, [userInput, conversation]);

  const handleInputText = async (text) => {
    setLoading(true); // Set loading state to true
    const userMessage = { sender: "user", message: text };
    setConversation((prevConversation) => [...prevConversation, userMessage]);
    setUserInput((prevUserInput) => [...prevUserInput, userMessage]);
    await dispatcher(chatChatBot(text));
    setLoading(false); // Set loading state to false
  };

  useEffect(() => {
    if (chatOpenAi.length > 0) {
      const botMessage = { sender: "bot", message: chatOpenAi };
      setConversation((prevConversation) => [...prevConversation, botMessage]);
    }
  }, [chatOpenAi]);

  return (
    <>
      <div className="fixed pt-2 h-screen px-1 bg-gray-700">
        {/* Profile */}
        <Profile data={messageContoh.dataProfile} status={loading}/>
        <div className="border-2 lg:ml-72  h-[86%] md:h-[92%] lg:h-[92%] p-2 flex flex-col border-dashed rounded-lg border-gray-700">
          {/* chats */}
          <div
            ref={chatUserRef}
            className="px-4 overflow-y-scroll h-screen rounded shadow-inner bg-black scrollbar-thin scrollbar-thumb-[#9ca3af] scrollbar-thumb-rounded-md"
          >
            <Warning />
            {/* Bot */}
            <Bot
              message={messageContoh.bot1}
              image={messageContoh.dataProfile[0]}
              type ={"statis"}
            />
            {/* User */}
            <User message={messageContoh.user} />
            <Bot
              message={messageContoh.bot2}
              image={messageContoh.dataProfile[0]}
              type ={"statis"}
            />
            {conversation.map((message, index) => {
              if (message.sender === "user") {
                return <User key={index} message={message.message.text} />;
              } else if (message.sender === "bot") {
                return (
                  <Bot
                    key={index}
                    message={message.message}
                    image={messageContoh.dataProfile[0]}
                    type ={"dinamis"}
                  />
                );
              }
              return null;
            })}
            {loading ? <LoadingMessage image={messageContoh.dataProfile[0]}/> : null}
            <div ref={chatUserRef}></div>
          </div>
          {/* Input */}
          <ChatBotInput textInput={handleInputText} />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ChatBotCom;
