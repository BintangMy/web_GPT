import Image from "next/image";
import Bot from "./Bot";
const BotImage = ({ image, imageAI }) => {
  const messageContoh = {
    bot: "Baik ini gambarnya",
    dataProfile: [
      "https://ik.imagekit.io/bintangtopup/webGPT/ultra_image.jpg?updatedAt=1685082766595",
    ],
  };

  return (
    <>
      <Bot
        message={messageContoh.bot}
        image={messageContoh.dataProfile[0]}
        type={"statis"}
      />
      <div className="flex justify-start gap-2 my-3 mr-10 relative">
        <Image
          loader={({ src }) => src}
          src={image}
          className="rounded-full"
          width={30}
          height={30}
          alt="bot_image"
          style={{ maxWidth: "30px", maxHeight: "30px" }}
        />
        <div className="flex justify-end content-end">
          <Image
            loader={({ src }) => src}
            src={imageAI}
            className="rounded-md"
            width={300}
            height={300}
            alt="bot_image"
            style={{ maxWidth: "250px", maxHeight: "250px" }}
          />
          {/* <a className=" text-white text-2xl p-1 rounded-md  left-60 bg-black bg-opacity-50" >
        <FiDownload/>
      </a> */}
        </div>
      </div>
    </>
  );
};

export default BotImage;
