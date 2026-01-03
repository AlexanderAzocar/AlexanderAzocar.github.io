import { useState, useCallback, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Code2,
  Terminal,
  Home,
  Briefcase,
  FingerprintPattern,
} from "lucide-react";
import { Button } from "@/module/portfolio/components/ui/button";

const navItems = [
  { name: "Inicio", targetId: "home", icon: Home },
  { name: "Experiencia", targetId: "experience", icon: Briefcase },
  { name: "Proyectos", targetId: "projects", icon: Code2 },
  { name: "Sobre mí", targetId: "about", icon: FingerprintPattern },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const rafIdRef = useRef<number | null>(null);

  const mobileNavId = "mobile-nav";

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current != null) return;

      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;

        const sections = navItems.map((item) =>
          document.getElementById(item.targetId)
        );

        const currentSection = sections.find((section) => {
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        });

        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current != null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent, targetId: string) => {
      e.preventDefault();
      const element = document.getElementById(targetId);

      if (element) {
        setIsMobileMenuOpen(false);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Ir a inicio"
        >
          <div className="bg-primary/10 p-2 rounded-lg text-primary">
            <Terminal className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-muted-foreground">
            Alexander<span className="text-foreground">.dev</span>
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.targetId;

            return (
              <div key={item.name} className="relative">
                <Button
                  variant="ghost"
                  className={`
                    text-sm font-medium transition-all cursor-pointer relative
                    ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5" // Inactivo
                    }
                  `}
                  onClick={(e) => scrollToSection(e, item.targetId)}
                  aria-current={isActive ? "location" : undefined}
                >
                  <item.icon
                    className={`mr-2 h-4 w-4 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Button>

                {isActive && (
                  <span className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in-x duration-300" />
                )}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileNavId}
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>
      </div>

      {/* MENU MÓVIL */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-300 ease-out"
          id={mobileNavId}
        >
          <nav
            className="flex flex-col p-4 space-y-2"
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={(e) => scrollToSection(e, item.targetId)}
                  className={`
                    flex items-center w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-primary/10 text-primary border-l-4 border-primary"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }
                  `}
                  aria-current={isActive ? "location" : undefined}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
