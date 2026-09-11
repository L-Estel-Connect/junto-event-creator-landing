import { Container, Divider, Eyebrow } from "./ui";

const pillars = [
  {
    title: "Branding & creative assets",
    body: "Materiales y recursos para mantener una identidad Junto consistente.",
  },
  {
    title: "Event playbooks",
    body: "Formatos, ideas y aprendizajes para ayudarte a crear eventos que funcionen.",
  },
  {
    title: "Marketing support",
    body: "Promoción a través de los canales de Junto cuando corresponda.",
  },
  {
    title: "Technology",
    body: "La app Junto como herramienta para crear grupos, activar asistentes y conectar personas.",
  },
  {
    title: "Team support",
    body: "Trabajarás directamente con el equipo Junto para desarrollar y mejorar tus eventos.",
  },
];

export function SupportSection() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container>
        <Eyebrow>El apoyo</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Tú aportas la energía. Junto te da la estructura.
        </h2>
        <Divider className="mt-6" />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-junto-ink/75 sm:text-lg">
          No tienes que construir todo desde cero.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-junto-ink/10 pt-5">
              <h3 className="text-lg font-semibold text-junto-ink sm:text-xl">{pillar.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-junto-ink/70">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-2xl border-l-2 border-junto-coral pl-6">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-junto-coral">
            Iniciativa.
          </p>
          <p className="mt-3 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
            No buscamos a alguien esperando instrucciones para cada detalle.
          </p>
          <p className="mt-3 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
            Buscamos a alguien que vea una oportunidad y diga:
          </p>
          <p className="mt-3 text-lg font-semibold italic leading-snug text-junto-ink sm:text-xl">
            “Tengo una idea. Sé dónde hacerlo. Vamos.”
          </p>
        </div>
      </Container>
    </section>
  );
}
