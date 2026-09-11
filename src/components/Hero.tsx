import { Container, CtaLink, Divider, Eyebrow, ImagePlaceholder } from "./ui";

const supportingLines = [
  "Organiza eventos.",
  "Haz crecer tu comunidad.",
  "Conoce gente increíble.",
  "Construye algo con nosotros.",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pt-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Junto Event Creator · Madrid</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Crea los eventos que todo Madrid querrá conocer.
          </h1>

          <div className="mt-7 space-y-4 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
            <p>
              ¿Eres esa persona que siempre dice “hagamos algo”, encuentra el sitio, reúne al
              grupo y consigue que todo el mundo termine hablando con todo el mundo?
            </p>
            <p>Puede que esto sea para ti.</p>
            <p>
              Como Junto Event Creator, serás una de las personas encargadas de dar vida a Junto
              en Madrid: creando experiencias sociales, reuniendo comunidades y haciendo que
              conocer gente nueva vuelva a suceder donde debería suceder:
            </p>
            <p className="font-semibold text-junto-ink">en la vida real.</p>
          </div>

          <div className="mt-9 border border-junto-ink/10 bg-junto-ink/[0.02] px-6 py-6 sm:px-7">
            <Divider className="mb-4" />
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">Hasta 2.500 €/mes*</p>
            <p className="mt-1.5 text-sm text-junto-ink/70 sm:text-base">
              200 € por evento + comisiones e incentivos por resultados.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 text-sm font-medium text-junto-ink/80 sm:grid-cols-2 sm:text-base">
            {supportingLines.map((line) => (
              <li key={line} className="flex items-center gap-2.5">
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-junto-coral" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <CtaLink href="#aplicar" variant="primary" className="w-full sm:w-auto">
              Aplicar ahora
            </CtaLink>
            <CtaLink href="#oportunidad" variant="secondary" className="w-full sm:w-auto">
              Ver cómo funciona
            </CtaLink>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-junto-ink/45">
            *Ingresos variables basados en resultados, eventos y comisiones. No se trata de un
            puesto asalariado y los ingresos no están garantizados.
          </p>
        </div>

        <ImagePlaceholder
          label="Rooftop / dinner en Madrid, luz cálida de atardecer, grupo conectando"
          aspect="aspect-[4/5] lg:aspect-[3/4]"
          className="lg:ml-auto lg:max-w-md"
        />
      </Container>
    </section>
  );
}
