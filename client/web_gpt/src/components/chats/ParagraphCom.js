import User from "../card/messages/User";
import Bot from "../card/messages/Bot";
import ChatBotInput from "../input/ChatBotInput";
import Footer from "../footer";
import Warning from "../card/messages/Warning";
import Profile from "../card/messages/Profile";

const ParagraphCom = () => {
  const messageContoh = {
    bot1: "Ada yang bisa saya bantu ?",
    bot2: "Indonesia adalah negara kepulauan yang terletak di Asia Tenggara dan merupakan salah satu negara terbesar di dunia dalam hal populasi.Dikenal sebagai negeri seribu pulau, Indonesia memiliki kekayaan alam yang melimpah, keindahan alam yangmenakjubkan, dan keragaman budaya yang kaya. \n \n Dari ujung barat hingga timur, Indonesia menawarkan panorama yang memukau.Pegunungan yang menjulang tinggi, seperti Gunung Bromo dan Gunung Rinjani, menawarkan pengalaman mendaki yang menakjubkan.Selain itu, keindahan alam Indonesia terlihat dalam keberagaman pulau- pulau tropisnya, seperti Bali denganpantai - pantai yang indah, Lombok dengan keindahan Gili yang mempesona, dan Raja Ampat dengan kekayaan bawah laut yang luar biasa. \n \n ....",
    user: "Buatkan Paragraph tentang Indonesia ?",
    dataProfile: [
      "https://ik.imagekit.io/bintangtopup/webGPT/UltramanProfile.jpg?updatedAt=1685082766560",
      "Ultra Paragraph",
    ],
  };
  return (
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
  );
};

export default ParagraphCom;
