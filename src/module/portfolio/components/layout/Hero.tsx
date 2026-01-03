import { Button } from "@/module/portfolio/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Terminal } from "lucide-react";
import { LogoLoop } from "@/shared/components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiOpenjdk,
  SiPython,
  SiFastapi,
  SiPhp,
  SiLaravel,
  SiOracle,
  SiMysql,
  SiKubernetes,
  SiDocker,
  SiAmazon,
  SiGithubactions,
  SiPandas,
  SiScikitlearn,
  SiPowers,
} from "react-icons/si";

const techStack = [
  {
    node: <SiReact className="h-10 w-10 text-primary" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="h-10 w-10 text-primary" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiAngular className="h-10 w-10 text-primary" />,
    title: "Angular",
    href: "https://angular.io",
  },
  {
    node: <SiTypescript className="h-10 w-10 text-primary" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript className="h-10 w-10 text-primary" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTailwindcss className="h-10 w-10 text-primary" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },

  // --- Backend ---
  {
    node: <SiSpringboot className="h-10 w-10 text-primary" />,
    title: "Spring Boot",
    href: "https://spring.io",
  },
  {
    node: <SiOpenjdk className="h-10 w-10 text-primary" />,
    title: "Java",
    href: "https://dev.java",
  },
  {
    node: <SiPython className="h-10 w-10 text-primary" />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiFastapi className="h-10 w-10 text-primary" />,
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com",
  },
  {
    node: <SiPhp className="h-10 w-10 text-primary" />,
    title: "PHP",
    href: "https://www.php.net",
  },
  {
    node: <SiLaravel className="h-10 w-10 text-primary" />,
    title: "Laravel",
    href: "https://laravel.com",
  },

  // --- Bases de Datos ---
  {
    node: <SiOracle className="h-10 w-10 text-primary" />,
    title: "Oracle DB",
    href: "https://www.oracle.com/database/",
  },
  {
    node: <SiMysql className="h-10 w-10 text-primary" />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },

  {
    node: <SiKubernetes className="h-10 w-10 text-primary" />,
    title: "Kubernetes",
    href: "https://kubernetes.io",
  },
  {
    node: <SiDocker className="h-10 w-10 text-primary" />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiAmazon className="h-10 w-10 text-primary" />,
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    node: <SiGithubactions className="h-10 w-10 text-primary" />,
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
  },

  // --- Data & Tools ---
  {
    node: <SiPandas className="h-10 w-10 text-primary" />,
    title: "Pandas",
    href: "https://pandas.pydata.org",
  },
  {
    node: <SiScikitlearn className="h-10 w-10 text-primary" />,
    title: "Scikit-Learn",
    href: "https://scikit-learn.org",
  },
  {
    node: <SiPowers className="h-10 w-10 text-primary" />,
    title: "Power BI",
    href: "https://powerbi.microsoft.com",
  },
];

export function Hero() {
  const heroHeadingId = "hero-heading";
  const personalInfo = {
    name: "Alexander Azocar",
    role: "Software Engineer | Full Stack & DevOps",
    bio: "Transformo problemas complejos en arquitecturas de software robustas. Especializado en construir soluciones escalables y eficientes, integrando desarrollo Full Stack con estrategias DevOps modernas.",
    email: "alexander27azocar@gmail.com",
    github: "https://github.com/AlexanderAzocar",
    linkedin: "https://www.linkedin.com/in/alexander-azocar",
  };

  const scrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-start pt-10 lg:pt-30 pb-10 overflow-hidden px-4 md:px-6"
      aria-labelledby={heroHeadingId}
    >
      <div className="container mx-auto flex flex-col items-center text-center z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* BADGE */}
        <p
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/0 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm  animate-in fade-in slide-in-from-top-4 duration-1000"
          role="status"
          aria-live="polite"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponible para trabajar
        </p>

        <header className="space-y-6 max-w-3xl animate-in fade-in zoom-in-95 duration-1000 delay-150 flex flex-col items-center">
          <h1
            id={heroHeadingId}
            className="text-4xl md:text-6xl lg:text-6xl font-medium tracking-tight text-foreground drop-shadow-xl"
          >
            Hola, soy <br className="md:hidden" />
            <span className="text-muted-foreground">{personalInfo.name}</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-lg lg:text-xl md:text-3xl text-primary font-medium">
            <Terminal className="h-5 w-5 lg:h-8 lg:w-8" />
            <span>{personalInfo.role}</span>
          </div>

          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </header>

        <nav
          className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
          aria-label="Enlaces de contacto"
        >
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Button
                variant="ghost"
                size="md"
                className="rounded-full px-8 text-base bg-primary/0 border border-primary/20 text-primary font-medium backdrop-blur-sm hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:shadow-[0_0_25px_rgba(69,104,130,0.5)] transition-all duration-300"
                asChild
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Enviar correo a Alexander"
                >
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Contáctame
                </a>
              </Button>
            </li>

            <li>
              <Button
                variant="ghost"
                size="md"
                className="rounded-full px-8 text-base bg-primary/0 border border-primary/20 text-primary font-medium backdrop-blur-sm hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:shadow-[0_0_25px_rgba(69,104,130,0.5)] transition-all duration-300"
                asChild
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir GitHub en una nueva pestaña"
                >
                  <Github className="mr-2 h-5 w-5" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            </li>

            <li>
              <Button
                variant="ghost"
                size="md"
                className="rounded-full px-8 text-base bg-primary/0 border border-primary/20 text-primary font-medium backdrop-blur-sm hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:shadow-[0_0_25px_rgba(69,104,130,0.5)] transition-all duration-300"
                asChild
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir LinkedIn en una nueva pestaña"
                >
                  <Linkedin className="mr-2 h-5 w-5" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
            </li>
          </ul>
        </nav>

        <section
          className="w-full mt-16 md:mt-26 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
          aria-label="Stack tecnológico"
        >
          <h2 className="text-center text-xs font-bold text-muted-foreground mb-8 uppercase tracking-[0.2em] opacity-70">
            Stack Tecnológico
          </h2>

          <div className="w-full relative overflow-hidden">
            {/* Fondo sutil detrás del loop */}
            <div className="absolute inset-0 bg-primary/0 -skew-y-1 transform scale-y-125 z-0" />

            <LogoLoop
              logos={techStack}
              speed={30}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={10}
              scaleOnHover
              pauseOnHover
              fadeOut
              fadeOutColor="var(--background)"
              className="relative z-10 py-4"
              ariaLabel="Tecnologías que utilizo"
            />
          </div>
        </section>
      </div>

      <button
        type="button"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group z-20"
        onClick={scrollToExperience}
        aria-label="Ir a la sección de experiencia"
      >
        <span className="flex flex-col items-center gap-2 text-primary/70 group-hover:text-primary transition-colors">
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </span>
      </button>
    </section>
  );
}
