// Components
import { Button } from "@/components/ui/button";
import { Bell, Home, Mail, Search, User } from "lucide-react";
import Profile from "./profile";

export default function SideBar() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Barra lateral izquierda */}
      <aside className="w-64 border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">xline</h1>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Inicio
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              Explorar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Notificaciones
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="mr-2 h-4 w-4" />
              Mensajes
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Perfil
            </Button>
          </nav>
        </div>
        <Profile />
      </aside>
    </div>
  );
}
