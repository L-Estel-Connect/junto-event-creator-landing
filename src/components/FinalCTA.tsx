import { Container, CtaLink } from "./ui";

export function FinalCTA() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Out, together.</h2>
        <p className="mt-4 text-lg font-medium text-junto-ink/70 sm:text-xl">
          Build it. Host it. Grow it.
        </p>

        <div className="mx-auto mt-10 max-w-xs">
          <p className="text-xl font-bold tracking-tight">Junto</p>
          <p className="text-sm text-junto-ink/60">Madrid</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-junto-coral">
            Hasta 2.500 €/mes · Freelance · Performance-based
          </p>
        </div>

        <div className="mt-10">
          <CtaLink href="#formulario" variant="primary">
            Apply now
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
