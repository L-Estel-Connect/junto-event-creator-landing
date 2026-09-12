import { Container, CtaLink, Eyebrow, ImagePlaceholder } from "./ui";

export function Hero() {
  return (
    <section className="pb-14 pt-12 sm:pb-20 sm:pt-16">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <Eyebrow>Junto Event Creator · Madrid</Eyebrow>

          <h1 className="mx-auto mt-5 max-w-xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:mx-0 lg:text-[3.2rem]">
            Crea los eventos que todo Madrid querrá conocer.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-junto-ink/70 sm:text-lg lg:mx-0">
            Organiza experiencias sociales en Madrid con el apoyo de Junto. Ganas por evento, más
            comisiones según resultados.
          </p>

          <div className="mx-auto mt-7 inline-flex max-w-full flex-col items-center gap-1 rounded-2xl bg-junto-coral px-8 py-5 text-white lg:mx-0 lg:items-start">
            <span className="text-2xl font-bold tracking-tight sm:text-3xl">Hasta 2.500 €/mes*</span>
            <span className="text-xs font-medium text-white/85 sm:text-sm">
              200 € por evento + comisiones e incentivos
            </span>
          </div>

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
