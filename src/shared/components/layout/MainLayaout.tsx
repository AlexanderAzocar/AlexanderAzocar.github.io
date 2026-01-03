import { Outlet } from "react-router-dom";
import { Header } from "@/module/portfolio/components/layout/Header";

// import LightRays from "@/shared/components/ui/LightRays";

export function MainLayout() {
  return (
    <div className="relative min-h-screen font-sans w-full overflow-hidden bg-background text-foreground">
      {/* <div className="fixed inset-0 z-[-1] pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysSpeed={0.2}
          raysColor="#4f46e5"
          lightSpread={0.2}
          rayLength={1.5}
          fadeDistance={1}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.2}
        />
      </div> 
      */}

      {/* CAPA 1: Header Fijo */}
      <Header />

      <main className="relative z-10 w-full h-full pt-16">
        <Outlet />
      </main>
    </div>
  );
}
