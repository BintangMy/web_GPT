import {
  AI_SUMMARY,
  AI_PARAGRAPH,
  AI_CHAT_BOT,
  AI_JS_CODING,
  AI_IMAGE_GENERATOR,
} from "../actionType/openAiType";

const initialState = {
  chatSummaryReducer: {},
  chatParagraph: {},
  chatOpenAi:{},
  chatCoding:{},
  chatImage:{},
};

export const openAiReducer = (state = initialState, action) => {
  switch (action.type) {
    case AI_SUMMARY:
      return {
        ...state,
        chatSummaryReducer: action.payload,
      };
    case AI_PARAGRAPH:
      return {
        ...state,
        chatParagraph: action.payload,
      };
    case AI_CHAT_BOT:
      return {
        ...state,
        chatOpenAi: action.payload,
      };
    case AI_JS_CODING:
      return {
        ...state,
        chatCoding: action.payload,
      };
    case AI_IMAGE_GENERATOR:
      return {
        ...state,
        chatImage: action.payload,
      };
    default:
      return state;
  }
};
