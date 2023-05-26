import Image from "next/image";
import User from "../card/messages/User";
import Bot from "../card/messages/Bot";
import ChatBotInput from "../input/ChatBotInput";
import Footer from "../footer";
import Warning from "../card/messages/Warning";
import Profile from "../card/messages/Profile";

const Summary = () => {

  const messageContoh = {
    bot1: "Ada yang bisa saya bantu ?",
    bot2: "Indonesia, negara kepulauan terbesar di dunia, memiliki keanekaragaman geografi, budaya, dan bahasa. Setelah meraih kemerdekaan pada tahun 1945, Indonesia mengadopsi Pancasila sebagai dasar ideologi negara. Dengan perekonomian yang berkembang pesat, kekayaan alam yang melimpah, dan sektor pariwisata yang menarik, Indonesia juga menghadapi tantangan lingkungan dan kesenjangan ekonomi. Secara politik, Indonesia adalah negara demokratis dengan sistem pemerintahan presidensial. Indonesia aktif dalam hubungan internasional dan menjadi anggota berbagai organisasi regional dan global.",
    user: "Buatkan Summary tentang Indonesia ?",
    dataProfile: ["https://ik.imagekit.io/bintangtopup/webGPT/ultrameng.jpg?updatedAt=1685023622427", "Ultra Summary"]
  }
  return (
    <>
      <div className="pt-2   h-screen px-1 bg-gray-700">
        {/* Profile */}

        <Profile data={messageContoh.dataProfile}/>
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
  );
};

export default Summary;
