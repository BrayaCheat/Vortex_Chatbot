import { supabase } from "~/server/lib/supabase";
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
    const { GEMINI_KEY, GEMINI_ENDPOINT, NORMAL_MODEL, SMART_MODEL } = useRuntimeConfig();
    const { prompt } = await readBody(event);
    const access_token = event.headers.get("access_token");
    const refresh_token = event.headers.get("refresh_token");
    const model = event.headers.get('model')
    const configModel = model === 'enable' ? SMART_MODEL : NORMAL_MODEL

    if (!access_token || !refresh_token) {
      return createError({
        statusMessage: "You don't have permission to access this resource.",
        status: 401,
      });
    }

    if (!prompt && typeof prompt !== 'string') {
      return createError({
        statusMessage: "Invalid prompt! prompt's type must be string.",
        status: 400,
      });
    }

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    if (error) {
      return createError({
        statusMessage: error?.message || "An error occur.",
        status: 500,
      });
    }

    if (data && data?.user && data?.session) {
      // const query = {
      //   contents: [
      //     {
      //       parts: [{ text: prompt.trim() }],
      //     },
      //   ],
      //   generationConfig: {
      //     temperature: 0.2, // Lower value makes responses more deterministic
      //     topK: 40, // Reduces randomness in word selection
      //     topP: 0.8, // Limits variability while keeping coherence
      //     maxOutputTokens: 4096, // 65536 is too high, keeping it reasonable
      //     responseMimeType: "text/plain",
      //   },
      // };
      const query = {
        contents: [
          {
            parts: [{ text: prompt.trim() }],
          },
        ],
        generationConfig: {
          temperature: 0.7, // Slightly more creative but still controlled
          topK: 50, // Keeps responses relevant while allowing some variation
          topP: 0.9, // Provides a good balance between randomness and coherence
          maxOutputTokens: 4096, // Enough for detailed responses without being excessive
          responseMimeType: "text/plain",
        },
      };

      const response = await $fetch(
        `${GEMINI_ENDPOINT}${configModel}?key=${GEMINI_KEY}`,
        {
          method: "POST",
          body: query,
        }
      );

      const responseText =
        (response &&
          (response as ResponseText)?.candidates?.[0]?.content?.parts?.[0]
            ?.text) ||
        "";

      return {
        data: responseText,
        message: "New response from VORTEX.",
        status: 201,
      };
    } else {
      return createError({
        statusMessage: "You don't have permission to access this resource.",
        status: 401,
      });
    }
  } catch (error) {
    console.error("Prompt error: ", error);
    return createError({
      statusMessage: "Internal server error",
      status: 500,
    });
  }
});
