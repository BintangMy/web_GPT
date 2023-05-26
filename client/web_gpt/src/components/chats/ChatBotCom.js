import User from "../card/messages/User";
import Bot from "../card/messages/Bot";
import ChatBotInput from "../input/ChatBotInput";
import Footer from "../footer";
import Warning from "../card/messages/Warning";
import Profile from "../card/messages/Profile";

const ChatBot = () => {

    const messageContoh = {
        bot1: "Ada yang bisa aku bantu ?",
        bot2: "Nama Aku Ultramen Cosmos : )",
        user: "Siapa Nama Kamu ?",
        dataProfile: [
            "https://ik.imagekit.io/bintangtopup/webGPT/Ultra.jpg?updatedAt=1685082766627",
            "Ultra Chats",
          ],
    }
    return (
        <>
            <>
      <div className="pt-2   h-screen px-1 bg-gray-700">
        {/* Profile */}

        <Profile data={messageContoh.dataProfile} />
        <div className="border-2 lg:ml-72 h-[92%] p-2 flex flex-col border-dashed rounded-lg border-gray-700">
          {/* chats */}
          <div className="px-4 overflow-y-scroll h-screen rounded shadow-inner bg-black scrollbar-thin scrollbar-thumb-[#9ca3af] scrollbar-thumb-rounded-md">
            <Warning />
            {/* Bot */}
            <Bot message={messageContoh.bot1} image={messageContoh.dataProfile[0]}/>
            {/* User */}
            <User message={messageContoh.user} />

            <Bot message={messageContoh.bot2} image={messageContoh.dataProfile[0]}/>

          </div>

          {/* Input */}
          <ChatBotInput />

          <Footer />
        </div>
      </div>
    </>
        </>
    );
};

export default ChatBot;
