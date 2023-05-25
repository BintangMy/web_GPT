import Image from "next/image";
import User from "../card/messages/User";
import Bot from "../card/messages/Bot";
import ChatBotInput from "../input/ChatBotInput";
import Footer from "../footer";

const Summary = () => {

  const messageContoh = {
    bot1: "Ada yang bisa saya bantu ?",
    bot2: "Indonesia adalah negara kepulauan yang terletak di Asia Tenggara dan merupakan salah satu negara terbesar di dunia dalam hal populasi.Dikenal sebagai negeri seribu pulau, Indonesia memiliki kekayaan alam yang melimpah, keindahan alam yangmenakjubkan, dan keragaman budaya yang kaya. \n \n Dari ujung barat hingga timur, Indonesia menawarkan panorama yang memukau.Pegunungan yang menjulang tinggi, seperti Gunung Bromo dan Gunung Rinjani, menawarkan pengalaman mendaki yang menakjubkan.Selain itu, keindahan alam Indonesia terlihat dalam keberagaman pulau- pulau tropisnya, seperti Bali denganpantai - pantai yang indah, Lombok dengan keindahan Gili yang mempesona, dan Raja Ampat dengan kekayaan bawah laut yang luar biasa. \n \n ....",
    user: "Buatkan Paragraph tentang Indonesia ?"
}
return (
  <>
    <div className="pt-16 md:pt-16 lg:pt-12  h-screen px-1 bg-gray-700">
      <div className="border-2 lg:ml-72 h-full p-2 flex flex-col border-dashed rounded-lg border-gray-700">
        {/* chats */}
        <div className="px-4 overflow-y-scroll h-screen rounded shadow-inner bg-black scrollbar-thin scrollbar-thumb-[#9ca3af] scrollbar-thumb-rounded-md">
          <p className="my-5 p-1 text-sm text-yellow-400 bg-grayy rounded-md text-center">
            Gunakan untuk keperluan yang produktif, seperti mendapatkan informasi, menjawab pertanyaan, atau memperluas pemahaman Anda tentang suatu topik. Hindari penggunaan yang tidak etis atau merugikan.
          </p>
          <p className=" mb-6 p-1  mx-9 text-sm text-white font-semibold bg-grayy rounded-full text-center">
            Ini Adalah Contoh Penggunaan
          </p>

          {/* Bot */}
          <Bot message={messageContoh.bot1}/>

          {/* User */}
          <User message={messageContoh.user}/>

          <Bot message={messageContoh.bot2}/>

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
