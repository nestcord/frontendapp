import { supabase } from "@/lib/client";
import { AuthButtonServer } from "@/app/components/auth/serverButton";
import { redirect } from "next/navigation";

export default async function Login() {
  // Comprobar la sesión de usuario
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Si existe, redireccionar al Home page.
  if (session) {
    redirect("/");
  }

  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Inicia sesión</h1>
      <AuthButtonServer />
    </section>
  );
}
