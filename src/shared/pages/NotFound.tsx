import { Button } from "@/module/portfolio/components/ui/button"; // Reutilizamos tu UI
import { Link } from "react-router-dom";
import FuzzyText from "../components/ui/FuzzyText";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground space-y-6 animate-in fade-in duration-500">
      {/* Icono animado sutilmente */}

      <FuzzyText>404</FuzzyText>

      <div className="text-center space-y-2 px-4">
        <p className="text-xl text-muted-foreground">Página no encontrada</p>
        <p className="text-muted-foreground/80 max-w-md mx-auto">
          Parece que has llegado a una ruta que no existe o fue movida.
        </p>
      </div>

      {/* Botón de regreso */}
      <Button asChild variant="default" size="lg">
        <Link to="/">Regresar al Inicio</Link>
      </Button>
    </div>
  );
}

export default NotFound;
