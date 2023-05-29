import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatCodingJS } from "../../../store/actionCreator/openAiCreator";
import User from "../card/messages/User";
import Bot from "../card/messages/Bot";
import ChatBotInput from "../input/ChatBotInput";
import Footer from "../footer";
import Warning from "../card/messages/Warning";
import Profile from "../card/messages/Profile";
import LoadingMessage from "../loading/LoadingMessage";
import BotCode from "../card/messages/BotCode";

const Summary = () => {
  const messageContoh = {
    bot1: "Hobiku menulis kode 👨‍💻, apakah kamu butuh bantuanku ?",
    bot2: `let rows = 5; \nlet output = ''; \n\nfor (let i = 1; i <= rows; i++) { \n  for (let j = 1; j <= i; j++) { \n      output += '* ';\n  } \n  output += ${'\\n'};\n}\n\nconsole.log(output);`,
    user: "Buatkan kode looping * membentuk segitiga ",
    dataProfile: [
      "https://ik.imagekit.io/bintangtopup/webGPT/Ultraman-Lucu-PP-WA-20-dc59f.jpg?updatedAt=1685082766265",
      "Ultra Code",
    ],
  }

  const [userInput, setUserInput] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(null)
  const dispatcher = useDispatch();
  const chatCoding = useSelector((state) => state.openAi.chatCoding);
  const chatUserRef = useRef(null);

  useEffect(() => {
    chatUserRef.current.scrollIntoView({ behavior: "smooth" });
  }, [userInput]);

  const handleInputText = async (text) => {
    setLoading(true); // Set loading state to true
    const userMessage = { sender: "user", message: text };
    setConversation((prevConversation) => [...prevConversation, userMessage]);
    setUserInput((prevUserInput) => [...prevUserInput, userMessage]);
    await dispatcher(chatCodingJS(text));
    setLoading(false); // Set loading state to false
  };

  useEffect(() => {
    if (chatCoding.length > 0) {
      const botMessage = { sender: "bot", message: chatCoding };
      setConversation((prevConversation) => [...prevConversation, botMessage]);
    }
  }, [chatCoding]);

  return (
    <>
      <div className="pt-2 h-screen px-1 bg-gray-700">
        {/* Profile */}
        <Profile data={messageContoh.dataProfile} status={loading} />
        <div className="border-2 lg:ml-72 h-[88%] md:h-[92%] lg:h-[92%] p-2 flex flex-col border-dashed rounded-lg border-gray-700">
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
              type={"statis"}
            />
            {/* User */}
            <User message={messageContoh.user} />

            <BotCode image={messageContoh.dataProfile[0]} message={messageContoh.bot2} />
            {conversation.map((message, index) => {
              if (message.sender === "user") {
                return <User key={index} message={message.message.text} />;
              } else if (message.sender === "bot") {
                return (
                  <BotCode
                    key={index}
                    message={message.message}
                    image={messageContoh.dataProfile[0]}
                  />
                );
              }
              return null;
            })}
            {loading ? <LoadingMessage image={messageContoh.dataProfile[0]} /> : null}
          </div>
          {/* Input */}
          <ChatBotInput textInput={handleInputText} />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Summary;
