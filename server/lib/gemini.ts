import OpenAI from "openai";

const { OPENAI_KEY } = useRuntimeConfig();
export const openAI = new OpenAI({
  apiKey: OPENAI_KEY,
});

