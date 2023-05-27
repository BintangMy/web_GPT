import {
  AI_SUMMARY,
  AI_PARAGRAPH,
  AI_CHAT_BOT,
  AI_JS_CODING,
  AI_IMAGE_GENERATOR,
} from "../actionType/openAiType";
import axios from "axios";

const mainUrl = "http://localhost:3001";

export const actionSetParagraph = (payload) => {
  console.log(payload, 'ini data payload................ action creator')
  return {
    type: AI_PARAGRAPH,
    payload,
  };
};

export const chatPragraph = ( text ) => {
  console.log(text, '..................... ini dari action creator')
  return async (dispatcher) => {
    try {
      // const response = { data: "Indonesia, negara kepulauan terbesar di dunia, memiliki keanekaragaman geografi, budaya, dan bahasa. Setelah meraih kemerdekaan pada tahun 1945, Indonesia mengadopsi Pancasila sebagai dasar ideologi negara. Dengan perekonomian yang berkembang pesat, kekayaan alam yang melimpah, dan sektor pariwisata yang menarik, Indonesia juga menghadapi tantangan lingkungan dan kesenjangan ekonomi. Secara politik, Indonesia adalah negara demokratis dengan sistem pemerintahan presidensial. Indonesia aktif dalam hubungan internasional dan menjadi anggota berbagai organisasi regional dan global.Indonesia, negara kepulauan terbesar di dunia, memiliki keanekaragaman geografi, budaya, dan bahasa. Setelah meraih kemerdekaan pada tahun 1945, Indonesia mengadopsi Pancasila sebagai dasar ideologi negara. Dengan perekonomian yang berkembang pesat, kekayaan alam yang melimpah, dan sektor pariwisata yang menarik, Indonesia juga menghadapi tantangan lingkungan dan kesenjangan ekonomi. Secara politik, Indonesia adalah negara demokratis dengan sistem pemerintahan presidensial. Indonesia aktif dalam hubungan internasional dan menjadi anggota berbagai organisasi regional dan global."}

      const response = await axios.post(`${mainUrl}/paragraph`, text);
      if (response.status !== 200) {
        throw new Error("Failed");
      }
      console.log(response)
      dispatcher(actionSetParagraph(response.data))
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const actionSetSummary = (payload) => {
  return {
    type: AI_PARAGRAPH,
    payload,
  };
};

export const chatSummary = (text) => {
  return async (dispatcher) => {
    try {
      const response = await axios.post(`${mainUrl}/summary`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      dispatcher()
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const actionSetChatBot = (payload) => {
  return {
    type: AI_CHAT_BOT,
    payload,
  };
};

export const chatChatBot = (text) => {
  return async (dispatcher) => {
    try {
      const response = await axios.post(`${mainUrl}/chatbot`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      dispatcher()
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const actionSetCodingJS = (payload) => {
  return {
    type: AI_JS_CODING,
    payload,
  };
};

export const chatCodingJS = (text) => {
  return async (dispatcher) => {
    try {
      const response = await axios.post(`${mainUrl}/jscoding`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      dispatcher()
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const actionSetImage = (payload) => {
  return {
    type: AI_IMAGE_GENERATOR,
    payload,
  };
};

export const chatImageGenerator = (text) => {
  return async (dispatcher) => {
    try {
      const response = await axios.post(`${mainUrl}/image_generator`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      dispatcher()
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
