import {
  AI_SUMMARY,
  AI_PARAGRAPH,
  AI_CHAT_BOT,
  AI_JS_CODING,
  AI_IMAGE_GENERATOR,
} from "../actionType/openAiType";
import axios from "axios";

const mainUrl = "http://localhost:3000";

export const actionSetParagraph = (payload) => {
  return {
    type: AI_SUMMARY,
    payload,
  };
};

export const chatPragraph = (text) => {
  return async () => {
    try {
      const response = await axios.post(`${mainUrl}/paragraph`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      return response;
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
  return async () => {
    try {
      const response = await axios.post(`${mainUrl}/summary`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      return response;
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
  return async () => {
    try {
      const response = await axios.post(`${mainUrl}/chatbot`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      return response;
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
  return async () => {
    try {
      const response = await axios.post(`${mainUrl}/jscoding`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      return response;
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
  return async () => {
    try {
      const response = await axios.post(`${mainUrl}/image_generator`, text);
      if (response.status !== 201) {
        throw new Error("Failed");
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
