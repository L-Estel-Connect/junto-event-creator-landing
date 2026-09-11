import { Container, Divider, Eyebrow } from "./ui";

const factors = [
  "Resultados de tus eventos",
  "Venta de entradas",
  "Número de asistentes",
  "Activaciones y grupos creados en Junto",
  "Acuerdos con venues",
  "Colaboraciones y partnerships",
  "Frecuencia y crecimiento de tus eventos",
];

export function EarningsSection() {
  return (
    <section className="border-t border-junto-ink/10 bg-junto-ink/[0.02] py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>Cómo ganas</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Gana según lo que construyes
        </h2>
        <Divider className="mt-6" />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
          <p>Este no es un puesto asalariado tradicional.</p>
          <p>
            Es una colaboración freelance basada en resultados, pensada para personas con
            mentalidad emprendedora.
          </p>
        </div>

        <div className="mt-9 border border-junto-ink/10 bg-white px-6 py-6 sm:px-7">
          <p className="text-2xl font-bold tracking-tight sm:text-3xl">
            Potencial de ingresos de hasta 2.500 €/mes*
          </p>
          <p className="mt-1.5 text-sm text-junto-ink/70 sm:text-base">
            200 € por evento + comisiones e incentivos por resultados.
          </p>
        </div>

        <p className="mt-9 text-sm font-semibold uppercase tracking-[0.1em] text-junto-ink/60">
          El rendimiento puede depender de
        </p>
        <ul className="mt-4 space-y-3">
          {factors.map((factor) => (
            <li key={factor} className="flex items-start gap-3 text-base text-junto-ink/85 sm:text-lg">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-junto-coral" />
              {factor}
            </li>
          ))}
        </ul>

        <p className="mt-9 text-lg font-semibold leading-snug text-junto-ink sm:text-xl">
          Cuanto más fuerte sea la comunidad y mejores sean los eventos, mayor será tu potencial
          de ingresos.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-junto-ink/45">
          *Hasta 2.500 €/mes representa un potencial máximo sujeto a rendimiento y volumen de
          eventos; no constituye un salario ni un ingreso garantizado.
        </p>
      </Container>
    </section>
  );
}
