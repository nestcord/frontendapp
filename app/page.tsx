import { supabase } from "@/lib/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import SideBar from "./components/main/sideBar";
import Feed from "./components/main/feed";

export default async function Index() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return (
      <div className="flex min-h-screen bg-background">
        <SideBar />

        <Feed />

        {/* Sección de tendencias y sugerencias */}
        <aside className="w-80">
          <div className="p-4">
            <Input
              type="search"
              placeholder="Buscar en xline"
              className="mb-4"
            />
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Tendencias para ti</h3>
              <ul className="space-y-2">
                <li className="text-sm">#Tendencia1</li>
                <li className="text-sm">#Tendencia2</li>
                <li className="text-sm">#Tendencia3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">A quién seguir</h3>
              <div className="space-y-2">
                {[1, 2, 3].map((suggestion) => (
                  <div
                    key={suggestion}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`/placeholder-avatar-${suggestion + 3}.jpg`}
                          alt={`@sugerencia${suggestion}`}
                        />
                        <AvatarFallback>S{suggestion}</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm font-medium">
                          Sugerencia {suggestion}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          @sugerencia{suggestion}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Seguir
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
