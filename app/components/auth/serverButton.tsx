import { cookies } from "next/headers";
import { AuthButton } from "./clientButton";
import { supabase } from "@/lib/client";

export async function AuthButtonServer() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AuthButton session={session} />;
}
