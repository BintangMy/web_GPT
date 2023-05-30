import {
  AI_SUMMARY,
  AI_PARAGRAPH,
  AI_CHAT_BOT,
  AI_JS_CODING,
  AI_IMAGE_GENERATOR,
} from "../actionType/openAiType";
import axios from "axios";

const mainUrl = process.env.MAIN_URL;


export const actionSetParagraph = (payload) => {
  return {
    type: AI_PARAGRAPH,
    payload,
  };
};

export const chatPragraph = (text) => {
  return async (dispatcher) => {
    try {
      const response = await axios.post(`${mainUrl}/paragraph`, text);
      if (response.status !== 200) {
        response.data =
          "Kami sedang menerima banyak permintaan respon, silakan coba sesaat lagi";
        dispatcher(actionSetParagraph(response.data)); // Menggunakan actionSetParagraph sebagai action creator
      } else {
        dispatcher(actionSetParagraph(response.data)); // Menggunakan actionSetParagraph sebagai action creator
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const actionSetSummary = (payload) => {
  return {
    type: AI_SUMMARY,
    payload,
  };
};

export const chatSummary = (text) => {
  return async (dispatcher) => {
    try {
      const response = await axios.post(`${mainUrl}/summary`, text);
      if (response.status !== 200) {
        response.data =
          "Kami sedang menerima banyak permintaan respon, silakan coba sesaat lagi";
        dispatcher(actionSetSummary(response.data)); // Menggunakan actionSetSummary sebagai action creator
      } else {
        dispatcher(actionSetSummary(response.data)); // Menggunakan actionSetSummary sebagai action creator
      }
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
      if (response.status !== 200) {
        response.data =
          "Kami sedang menerima banyak permintaan respon, silakan coba sesaat lagi";
        dispatcher(actionSetChatBot(response.data)); // Menggunakan actionSetChatBot sebagai action creator
      } else {
        dispatcher(actionSetChatBot(response.data)); // Menggunakan actionSetChatBot sebagai action creator
      }
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
      if (response.status !== 200) {
        response.data =
          "Kami sedang menerima banyak permintaan respon, silakan coba sesaat lagi";
        dispatcher(actionSetCodingJS(response.data)); 
      } else {
        dispatcher(actionSetCodingJS(response.data)); 
      }
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
      if (response.status !== 200) {
        response.data =
          "Kami sedang menerima banyak permintaan respon, silakan coba sesaat lagi";
        dispatcher(actionSetImage(response.data)); // Menggunakan actionSetImage sebagai action creator
      } else {
        dispatcher(actionSetImage(response.data)); // Menggunakan actionSetChatBot sebagai action creator
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
