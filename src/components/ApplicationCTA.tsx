import { Container, CtaLink, Divider, Eyebrow } from "./ui";

export function ApplicationCTA() {
  return (
    <section className="border-t border-junto-ink/10 bg-junto-ink text-white py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <Eyebrow className="text-junto-wax">Aplica</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          ¿Quieres ser Junto Event Creator?
        </h2>
        <Divider className="mx-auto mt-6" />
        <p className="mt-6 text-lg font-medium text-white/80">Aplica para unirte a nosotros.</p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Cuéntanos quién eres, qué harías y por qué tú podrías convertirte en una de las caras de
          Junto en Madrid.
        </p>
        <div className="mt-9">
          <CtaLink href="#formulario" variant="primary">
            Empezar mi candidatura
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
