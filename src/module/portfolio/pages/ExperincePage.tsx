import { Briefcase, Calendar, Building2, ArrowDown } from "lucide-react";

export default function ExperiencePage() {
  const experienceHeadingId = "experience-heading";

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const experiences = [
    {
      id: 1,
      role: "Ingeniero de Software Trainee / DevOps",
      company: "Mercantil Seguros C.A.",
      date: "2025 - Presente",
      description:
        "Desarrollo Full Stack de portales internos críticos utilizando React y Spring Boot. Implementación de cultura DevOps, automatizando despliegues (CI/CD) con Azure DevOps y orquestando infraestructura en Kubernetes y Docker para asegurar alta disponibilidad.",
      skills: [
        "React",
        "Spring Boot",
        "Azure DevOps",
        "Kubernetes",
        "Docker",
        "Oracle",
      ],
    },
    {
      id: 2,
      role: "Ingeniero de Software Trainee",
      company: "IVIC (Instituto Venezolano de Investigaciones Científicas)",
      date: "2022 - 2024",
      description:
        "Garantía de operatividad de la plataforma educativa EDUQUIM (basada en Moodle). Ejecución de mantenimiento correctivo y evolutivo, gestión de bases de datos y soporte técnico, impactando a más de 200 estudiantes.",
      skills: ["PHP", "SQL", "Moodle", "Linux", "Mantenimiento Web"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full lg:py-7 overflow-hidden"
      aria-labelledby={experienceHeadingId}
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 h-125 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12 animate-in fade-in duration-500 z-10 relative">
        <header className="space-y-4 mb-16 text-center">
          <h2
            id={experienceHeadingId}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3"
          >
            <Briefcase
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary"
              aria-hidden="true"
            />
            Experiencia Laboral
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional y académica aplicando ingeniería de
            software en entornos reales.
          </p>
        </header>

        <ol className="relative border-l-2 border-primary ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <li key={exp.id} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(69,104,130,0.5)] group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />

              <article className="flex flex-col gap-2 text-left">
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>

                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <Building2
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <Calendar
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    {exp.date}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mb-3">
                  {exp.description}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label="Habilidades">
                  {exp.skills.map((skill) => (
                    <li key={skill}>
                      <span className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        {/* FLECHA DE SCROLL */}
        <div className="mt-30 pb-10 flex justify-center animate-bounce">
          <button
            type="button"
            className="flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors group"
            onClick={scrollToProjects}
            aria-label="Ir a la sección de proyectos"
          >
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
