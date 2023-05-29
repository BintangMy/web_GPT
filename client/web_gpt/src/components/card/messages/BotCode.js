import CodeMirror from "@uiw/react-codemirror";
import { aura } from "@uiw/codemirror-theme-aura";
import { javascript } from "@codemirror/lang-javascript";
import Bot from "./Bot";
import Image from "next/image";

const BotCode = ({ image, message }) => {
  const messageContoh = {
    bot: "Baik ini kodenya",
    dataProfile: [
      "https://ik.imagekit.io/bintangtopup/webGPT/Ultraman-Lucu-PP-WA-20-dc59f.jpg?updatedAt=1685082766265",
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
          <div
            className="bg-grayy text-sm text-white p-2 rounded-md"
            style={{ whiteSpace: "pre-line" }}
            
          >
            <CodeMirror
              value={message}
              theme={aura}
              readOnly
              extensions={[javascript({ jsx: true })]}
            />
          </div>
          {/* <a className=" text-white text-2xl p-1 rounded-md  left-60 bg-black bg-opacity-50" >
        <FiDownload/>
      </a> */}
        </div>
      </div>


    </>
  );
};
export default BotCode;
