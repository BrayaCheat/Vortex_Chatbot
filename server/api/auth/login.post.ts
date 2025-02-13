import { supabase } from "~/server/lib/supabase";

interface User {
  credential: {
    email?: string;
    password?: string;
  };
}

export default defineEventHandler(async (event) => {
  try {
    const body: User = await readBody(event);
    const {
      credential: { email, password },
    } = body;
    if (!email || !password) {
      return {
        message: "Credential is missing",
        status: 400,
      };
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return createError({
        message: error?.message || "Authentication failed.",
        statusCode: 400,
      });
    }
    if (data) {
      return {
        data,
        message: "Login success.",
        status: 201,
      };
    }
    return createError({
      message: "Unexpected error during login.",
      statusCode: 500,
    });
  } catch (error) {
    throw createError({
      message: "Internal server error",
      statusCode: 500,
    });
  }
});
