import { supabase } from "~/server/lib/supabase";

interface User {
  credential: {
    email?: string;
    password?: string;
  }
}

export default defineEventHandler(async (event) => {
  try {
    const body: User = await readBody(event);
    const { credential: {email, password} } = body;

    if (!email) {
      return {
        message: "Email is missing",
        status: 400,
      };
    }
    if (!password) {
      return {
        message: "Password is missing.",
        status: 400,
      };
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data && data?.user) {
      return data
    }
    if(error){
      return {
        message: error?.message,
        status: 400
      }
    }
    return {
      message: "There was a problem. Please try again.",
      status: 400,
    };
  } catch (error) {
    throw createError({
      message: "Internal server error",
      statusCode: 500,
    });
  }
});
