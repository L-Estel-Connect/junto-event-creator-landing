import { Container, CtaLink, Eyebrow, ImagePlaceholder } from "./ui";

export function Hero() {
  return (
    <section className="pb-14 pt-12 sm:pb-20 sm:pt-16">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <Eyebrow>Junto Event Creator · Madrid</Eyebrow>

          <h1 className="mx-auto mt-5 max-w-xl text-balance text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:mx-0">
            Event Creator freelance en Madrid
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-junto-ink/70 sm:text-lg lg:mx-0">
            Junto busca personas que organicen eventos sociales en Madrid: encontrar el lugar,
            reunir al grupo y crear el ambiente para que la gente conecte. Colaboración freelance
            remunerada por evento, con comisiones e incentivos según resultados.
          </p>

          <p className="mx-auto mt-7 max-w-md text-2xl font-bold text-junto-coral sm:text-3xl lg:mx-0">
            Hasta 2.500 €/mes*
          </p>
          <p className="mx-auto mt-1 max-w-md text-sm text-junto-ink/60 lg:mx-0">
            100 € por evento + comisiones e incentivos según resultados
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <CtaLink href="#formulario" variant="primary">
              Aplicar ahora
            </CtaLink>
          </div>

          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-junto-ink/45 lg:mx-0">
            *Ingresos variables según resultados, eventos y comisiones. Colaboración freelance, no
            un puesto asalariado ni con ingresos garantizados.
          </p>
        </div>

        <ImagePlaceholder
          label="Rooftop / dinner en Madrid, luz cálida de atardecer, grupo conectando"
          aspect="aspect-[4/5] lg:aspect-[3/4]"
          className="mx-auto w-full max-w-sm lg:max-w-none"
        />
      </Container>
    </section>
  );
}
