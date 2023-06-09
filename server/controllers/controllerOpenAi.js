const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class controllerOpenAi {
  static async summary(req, res, next) {
    try {
      const { text } = req.body;
      const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Summarize this \n${text}`,
        max_tokens: 500,
        temperature: 0.5,
      });

      if (!data) throw { name: "notFound" };
      res.status(200).json(data?.choices[0].text);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async paragraph(req, res, next) {
    try {
      const { text } = req.body;
      const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `write a detail paragraph about \n${text}`,
        max_tokens: 500,
        temperature: 0.5,
      });

      if (!data) throw { name: "notFound" };
      res.status(200).json(data?.choices[0].text);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async chatbot(req, res, next) {
    try {
      const { text } = req.body;
      const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Answer question similar to how ultra from star war would.
      Me: 'what is your name?'
      Ultra: 'Ultra is my name'
      Me: ${text}`,
        max_tokens: 300,
        temperature: 0.7,
      });

      if (!data) throw { name: "notFound" };
      res.status(200).json(data?.choices[0].text);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async jsCoding(req, res, next) {
    try {
      const { text } = req.body;
      const { data } = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `/* convert these instruction into javascript code \n${text}`,
        max_tokens: 400,
        temperature: 0.25,
      });

      if (!data) throw { name: "notFound" };
      res.status(200).json(data?.choices[0].text);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async imageGenerator(req, res, next) {
    try {
      const { text } = req.body;
      const { data } = await openai.createImage({
        prompt: `generate a scifi image of ${text}`,
        n: 1,
        size: "512x512",
      });

      if (!data) throw { name: "notFound" };
      res.status(200).json(data?.data[0].url);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = controllerOpenAi;
