import { Container, Divider, Eyebrow, ImagePlaceholder } from "./ui";

const formats = [
  "Rooftops",
  "Afterworks",
  "Dinners",
  "Brunches",
  "Parties",
  "Outdoor plans",
  "Sunday plans",
  "Experiencias inesperadas",
];

export function ExperiencesSection() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>El formato</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Crea experiencias que la gente quiera vivir
            </h2>
            <Divider className="mt-6" />

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-base font-medium text-junto-ink/80 sm:text-lg">
              {formats.map((format) => (
                <li key={format} className="border-b border-junto-ink/10 pb-3">
                  {format}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
              O una idea que todavía no se nos haya ocurrido.
            </p>

            <blockquote className="mt-8 border-l-2 border-junto-coral pl-5 text-lg font-semibold leading-snug text-junto-ink sm:text-xl">
              “¿Qué plan haría que 50 personas quisieran salir de casa esta semana?”
            </blockquote>

            <p className="mt-8 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
              Y después hacerlo realidad.
            </p>
          </div>

          <ImagePlaceholder
            label="Grupo en un rooftop / brunch, luz natural, energía social auténtica"
            aspect="aspect-[4/5]"
          />
        </div>
      </Container>
    </section>
  );
}
