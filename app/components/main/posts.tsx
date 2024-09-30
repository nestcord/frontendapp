// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Posts() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((post) => (
        <div key={post} className="p-4 border rounded-lg">
          <div className="flex items-center mb-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={`/placeholder-avatar-${post}.jpg`}
                alt={`@usuario${post}`}
              />
              <AvatarFallback>U{post}</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-sm font-medium">Usuario {post}</p>
              <p className="text-xs text-muted-foreground">@usuario{post}</p>
            </div>
          </div>
          <p className="text-sm">
            Este es un post de ejemplo. ¡Bienvenido a xline!
          </p>
        </div>
      ))}
    </div>
  );
}
