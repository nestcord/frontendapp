"use client";

import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  // Provedor de servicio de inicio de sesión (Discord)
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  // Manejar los cierres de sesión y refrescar.
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  // Interfaz de Inicio/Cierre de sesión para el usuario
  return (
    <header>
      {session === null ? (
        <header>
          <Button onClick={handleSignIn}>Iniciar sesión</Button>
        </header>
      ) : (
        <Button onClick={handleSignOut}>Cerrar sesión</Button>
      )}
    </header>
  );
}
