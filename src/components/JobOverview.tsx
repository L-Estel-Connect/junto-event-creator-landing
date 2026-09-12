import { Container } from "./ui";

const blocks: { title: string; items: string[] }[] = [
  {
    title: "Qué harás",
    items: [
      "Crear y organizar eventos sociales en Madrid",
      "Recibir y conectar a los asistentes",
      "Trabajar con venues y partners locales",
      "Proponer nuevos formatos y conceptos",
    ],
  },
  {
    title: "Cómo ganas",
    items: [
      "100 € por evento",
      "Comisiones e incentivos según resultados",
      "Potencial de hasta 2.500 €/mes*",
      "Colaboración freelance, no asalariada",
    ],
  },
  {
    title: "Qué te da Junto",
    items: [
      "Branding y materiales de marca",
      "Playbooks de eventos que funcionan",
      "Apoyo de marketing y del equipo",
      "La app Junto como herramienta",
    ],
  },
  {
    title: "Qué buscamos",
    items: [
      "Vives en Madrid y conoces bien la ciudad",
      "Eres social, organizado/a y con iniciativa",
      "Cómodo/a siendo la cara visible de una marca",
      "Español y buen nivel de inglés",
    ],
  },
];

export function JobOverview() {
  return (
    <section id="puesto" className="border-t border-junto-ink/10 py-14 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.title}>
              <h2 className="text-lg font-semibold text-junto-ink sm:text-xl">{block.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-junto-ink/75 sm:text-base">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-junto-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-junto-ink/45">
          *Hasta 2.500 €/mes representa un potencial máximo sujeto a rendimiento y volumen de
          eventos; no constituye un salario ni un ingreso garantizado.
        </p>
      </Container>
    </section>
  );
}
