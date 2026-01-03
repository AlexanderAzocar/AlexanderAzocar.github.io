import { Code2, Rocket, Users, Award } from "lucide-react";

function AboutPage() {
  const aboutHeadingId = "about-heading";

  const aboutInfo = {
    introduction:
      "Ingeniero de Sistemas apasionado por la utilidad real de la tecnología. Me especializo en traducir necesidades de negocio complejas en aplicaciones intuitivas y funcionales, combinando la potencia del Backend con la usabilidad del Frontend moderno.",
    mission:
      "Crear tecnología que las personas disfruten usar. Mi enfoque combina la excelencia técnica con una visión centrada en el usuario, asegurando que cada línea de código contribuya a una experiencia final fluida y sin interrupciones.",
    experience:
      "A lo largo de mi trayectoria en sectores como Seguros y Educación, he aprendido que el mejor software es el que evoluciona. He trabajado en la mejora continua de plataformas heredadas y en la creación de nuevos productos digitales, siempre priorizando la estabilidad y la comunicación clara con mi equipo.",
  };
  const values = [
    {
      icon: <Code2 className="h-6 w-6" aria-hidden="true" />,
      title: "Arquitectura Sólida",
      description:
        "No solo escribo código; diseño sistemas modulares y mantenibles listos para escalar.",
    },
    {
      icon: <Rocket className="h-6 w-6" aria-hidden="true" />,
      title: "Mentalidad DevOps",
      description:
        "Automatizo lo complejo. Integro pipelines de CI/CD y contenedores para asegurar despliegues rápidos y sin errores.",
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden="true" />,
      title: "Sinergia de Equipo",
      description:
        "Me integro fluidamente en entornos ágiles, comunicando conceptos técnicos complejos con claridad y empatía.",
    },
    {
      icon: <Award className="h-6 w-6" aria-hidden="true" />,
      title: "Impacto Real",
      description:
        "Me obsesiona que la tecnología genere valor tangible, optimizando procesos operativos y la experiencia del usuario final.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-20 overflow-hidden"
      aria-labelledby={aboutHeadingId}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl z-10 relative">
        {/* Fondo decorativo */}
        <div className="absolute top-1/4 right-0 w-88 h-88 md:w-96 md:h-96 bg-primary/15 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none" />

        {/* Header */}
        <header className="text-center mb-10 md:mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <h2
            id={aboutHeadingId}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-5 md:mb-6"
          >
            Construyendo el <span className="text-primary">futuro digital</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {aboutInfo.introduction}
          </p>
        </header>

        {/* Valores */}
        <div className="mb-12 md:mb-14 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            aria-label="Valores"
          >
            {values.map((value) => (
              <li
                key={value.title}
                className="group relative p-5 sm:p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-none md:backdrop-blur-sm shadow-sm hover:bg-primary/10 hover:border-primary/40 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:shadow-[0_0_25px_rgba(69,104,130,0.3)] hover:-translate-y-1"
              >
                <article className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="p-6 sm:p-8  max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Estoy siempre abierto a discutir nuevas oportunidades y desafíos
              interesantes.
            </p>
            <a
              href="mailto:alexander27azocar@gmail.com"
              aria-label="Enviar correo para hablar sobre un proyecto"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-primary text-sm sm:text-base font-medium  hover:underline transition-[background-color,border-color,box-shadow,transform] duration-300"
            >
              Hablemos de tu proyecto
              <Rocket className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
