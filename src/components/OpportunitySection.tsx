import { Container, Divider, Eyebrow } from "./ui";

export function OpportunitySection() {
  return (
    <section id="oportunidad" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>La oportunidad</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Convierte tu vida social en algo más
        </h2>
        <Divider className="mt-6" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
          <p>
            Junto es una app social diseñada para que conocer gente nueva sea más natural: con
            tus amigos, en grupo y en la vida real.
          </p>
          <p>Y ahora buscamos personas capaces de llevar esa misma energía fuera de la app.</p>
          <p>No buscamos simplemente a alguien que “organice eventos”.</p>
          <p className="font-semibold text-junto-ink">
            Buscamos a alguien que pueda convertirse en la cara de Junto en Madrid.
          </p>
          <p>Alguien social, creativo, independiente y con ganas de construir.</p>
        </div>
      </Container>
    </section>
  );
}
