interface ResponseText {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const { GEMINI_KEY, GEMINI_ENDPOINT, GEMINI_MODEL } = config;
    const { prompt } = await readBody(event);

    if (!prompt) {
      return {
        message: "Invalid prompt",
        status: 400,
      };
    }

    const query = {
      contents: [
        {
          parts: [{ text: prompt.trim() }],
        },
      ],
    };

    const response = await $fetch(
      `${GEMINI_ENDPOINT}${GEMINI_MODEL}?key=${GEMINI_KEY}`,
      {
        method: "POST",
        body: query,
      }
    );

    const responseText = (response && (response as ResponseText)?.candidates?.[0]?.content?.parts?.[0]?.text) || '';

    return {
      data: responseText,
      message: "New response from ohlala",
      status: 201,
    };
  } catch (error) {
    console.error("Prompt error: ", error);
    return {
      message: "Internal server error",
      status: 500,
    };
  }
});


