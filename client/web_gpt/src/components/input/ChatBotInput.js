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
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
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
