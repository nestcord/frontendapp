// Components
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Posts from "./posts";

export default function Feed() {
  return (
    <main className="flex-1 border-r">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Inicio</h2>
        <div className="mb-4">
          <Textarea placeholder="¿Qué está pasando?" className="w-full" />
          <div className="mt-2 flex justify-between items-center">
            <div className="flex space-x-2">
              {/* Aquí irían los botones para adjuntar media */}
            </div>
            <Button>Publicar</Button>
          </div>
        </div>
        {/* Lista de posts/tweets */}
        <Posts />
      </div>
    </main>
  );
}
