import { Container, Divider, Eyebrow, ImagePlaceholder } from "./ui";

const lines = [
  "Crear nuevos formatos.",
  "Encontrar los mejores venues.",
  "Construir partnerships.",
  "Convertir eventos pequeños en eventos recurrentes.",
  "Crear una comunidad.",
  "Y ayudar a definir cómo serán los eventos Junto en Madrid.",
];

export function BuildMadridSection() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>El momento</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Build something real in Madrid.
            </h2>
            <Divider className="mt-6" />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
              <p>Junto está empezando a construir su comunidad de eventos IRL.</p>
              <p>Eso significa que no estás entrando cuando todo ya está hecho.</p>
            </div>

            <p className="mt-8 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
              Puedes ayudar a construirlo.
            </p>

            <ul className="mt-8 space-y-2.5 text-base font-medium text-junto-ink/85 sm:text-lg">
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <p className="mt-9 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
              Si funciona en Madrid, queremos llevar este modelo a más ciudades.
            </p>
          </div>

          <ImagePlaceholder
            label="Grupo Junto de noche, Madrid al fondo, energía auténtica"
            aspect="aspect-[4/5]"
          />
        </div>
      </Container>
    </section>
  );
}
