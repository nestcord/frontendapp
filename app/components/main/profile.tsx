// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Settings from "./settings";

export default function Profile() {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder-avatar.jpg" alt="@usuario" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium">Usuario Nombre</p>
          <p className="text-xs text-muted-foreground">@usuario</p>

          <Settings />
        </div>
      </div>
    </div>
  );
}
