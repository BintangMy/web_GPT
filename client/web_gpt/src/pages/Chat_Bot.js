import Sidebar from "@/components/sidebar"
import ChatBot from "@/components/chats/ChatBotCom"
const Chat_Bot = () => {
    return (
        <>
            <div className="font-Jost">
                <Sidebar />
                <ChatBot />
            </div>
        </>
    )
}

export default Chat_Bot