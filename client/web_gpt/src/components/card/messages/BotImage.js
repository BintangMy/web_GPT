import Image from "next/image";
import {FiDownload} from "react-icons/fi"
const BotImage = ({image}) => {
  return (
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
        src={image}
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
  );
};

export default BotImage
