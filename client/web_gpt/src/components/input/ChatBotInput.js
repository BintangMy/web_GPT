import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useState, useEffect } from "react";

const ChatBotInput = ({ textInput }) => {
  const [text, setText] = useState("");

  const submitTextInput = () => {
    textInput({ text });
    setText("");
  };

  useEffect(() => {
    setText("");
  }, []);

  const handleChangeInputText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="flex mt-2 items-center">
        <div className="relative w-full">
          <input
            type="text"
            id="voice-search"
            className="border rounded-tl-lg  rounded-bl-lg text-sm block w-full p-2.5  bg-grayy border-gray-600 placeholder-gray-400 text-white"
            placeholder="Masukan Pesan"
            value={text}
            onChange={handleChangeInputText}
            autoComplete="off"
          />
        </div>
        <button
          onClick={submitTextInput}
          className="inline-flex items-center py-[13px] px-3 rounded-tr-lg  rounded-br-lg text-sm font-medium text-white bg-black border border-gray-600"
        >
          <HiOutlinePaperAirplane className="rotate-45 " />
        </button>
      </div>
    </>
  );
};

export default ChatBotInput;
