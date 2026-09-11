import { Container, Divider, Eyebrow } from "./ui";

export function NetworkSection() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>Tu red</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Haz crecer tu red
        </h2>
        <Divider className="mt-6" />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
          <p>Ser Junto Event Creator significa conocer a:</p>
          <p className="font-semibold text-junto-ink">
            venues, restaurantes, bares, marcas, creators, comunidades, influencers y cientos de
            personas nuevas.
          </p>
          <p>
            Crearás relaciones locales mientras construyes tu propia red profesional y social.
          </p>
          <p>No solo organizas un evento.</p>
        </div>

        <p className="mt-8 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
          Te conviertes en una de las personas que conecta Madrid.
        </p>
      </Container>
    </section>
  );
}
