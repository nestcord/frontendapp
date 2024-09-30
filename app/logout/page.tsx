import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Logout() {
  const supabase = createClientComponentClient();
}
