import { Code2, Github, FolderGit, ArrowDown } from "lucide-react";
import { Button } from "@/module/portfolio/components/ui/button";

export default function ProjectsPage() {
  const projectsHeadingId = "projects-heading";

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Horarios",
      description:
        "Plataforma integral para la planificación académica y asignación de aulas. Incluye algoritmos para prevención de conflictos, módulos de seguridad (Auditoría/Bitácora), gestión de respaldos y autenticación personalizada.",
      tags: ["Laravel 10", "PHP 8.1", "MySQL", "AdminLTE", "FullCalendar"],
      links: {
        github: "https://github.com/D13G0ARJ/horario-universidad-",
      },
    },
    {
      id: 2,
      title: "IngeChat 360° - Asistente Universitario",
      description:
        "Chatbot inteligente híbrido que combina una base de conocimiento local con la IA de Google Gemini. Desarrollado con Laravel, ofrece orientación académica sobre ingeniería en la UNEFA mediante una interfaz moderna, respuestas generativas y navegación intuitiva.",
      tags: ["Python", "Laravel", "Google Gemini API", "AI", "EdTech"],
      links: {
        github:
          "https://github.com/AlexanderAzocar/Interface-web-chatbot-IngeChat-360-",
      },
    },
    {
      id: 3,
      title: "Identificador de Patrones de Rendimiento",
      description:
        "Plataforma de análisis predictivo basada en Machine Learning. Detecta factores clave en el rendimiento académico y bienestar psicológico, exponiendo resultados y recomendaciones personalizadas mediante una API RESTful escalable para instituciones educativas.",
      tags: ["Python", "Scikit-Learn", "FastAPI", "Pandas", "React"],
      links: {
        github: "https://github.com/AlexanderAzocar/academic-performance-api",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full lg:py-5 overflow-hidden bg-background"
      aria-labelledby={projectsHeadingId}
    >
      {/* 1. DECORACIÓN DE FONDO (Glow sutil a la izquierda) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-88 h-88 md:w-125 md:h-125 bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl z-10 relative">
        {/* 2. ENCABEZADO CENTRADO */}
        <header className="text-center space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center">
          {/* ----------------------------------- */}

          <h2
            id={projectsHeadingId}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3"
          >
            <Code2
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary"
              aria-hidden="true"
            />
            Mis Proyectos
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Una selección de desarrollos en Ingeniería de Sistemas, desde
            aplicaciones web robustas hasta modelos de análisis de datos.
          </p>
        </header>

        {/* 3. GRILLA DE PROYECTOS */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-6"
          aria-label="Listado de proyectos"
        >
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-none md:backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm hover:bg-primary/10 hover:border-primary/40 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:shadow-[0_0_25px_rgba(69,104,130,0.3)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Contenido Superior */}
              <article>
                {/* Icono de Carpeta */}
                <div className="mb-4 sm:mb-5 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <FolderGit
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 sm:mb-8">
                  {project.description}
                </p>
              </article>

              {/* Contenido Inferior (Tags y Botones) */}
              <div className="space-y-5 sm:space-y-6">
                {/* Tech Stack Tags */}
                <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold rounded-full bg-primary/5 text-primary border border-primary/10">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Botones de Links */}
                <nav
                  className="flex items-center gap-3 pt-6 border-t border-primary/10"
                  aria-label="Enlaces del proyecto"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-0 text-xs sm:text-sm text-muted-foreground hover:text-primary hover:bg-transparent p-0"
                    asChild
                  >
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 group/link"
                      aria-label={`Ver código de ${project.title} (nueva pestaña)`}
                    >
                      <Github
                        className="h-5 w-5 transition-transform group-hover/link:-translate-y-0.5"
                        aria-hidden="true"
                      />
                      <span className="underline decoration-transparent group-hover/link:decoration-primary underline-offset-4 transition-all">
                        Ver Código
                      </span>
                    </a>
                  </Button>
                </nav>
              </div>
            </li>
          ))}
        </ul>

        {/* Botón "Ver más en GitHub" al final */}
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all text-sm sm:text-base"
            asChild
          >
            <a
              href="https://github.com/AlexanderAzocar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
              aria-label="Explorar todos los repositorios en GitHub (nueva pestaña)"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              Explorar todo en GitHub
            </a>
          </Button>
        </div>

        {/* FLECHA DE SCROLL */}
        <div className="mt-10 pb-10 flex justify-center animate-bounce">
          <button
            type="button"
            className="p-2 rounded-full backdrop-blur-sm cursor-pointer text-muted-foreground hover:text-primary transition-colors group"
            onClick={scrollToAbout}
            aria-label="Ir a la sección sobre mí"
          >
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
