import { Container, Divider, Eyebrow, ImagePlaceholder } from "./ui";

const responsibilities = [
  "Recibir y conectar a los asistentes",
  "Crear una atmósfera donde sea fácil conocer gente",
  "Representar Junto",
  "Trabajar con venues y partners",
  "Ayudar a crear contenido alrededor de los eventos",
  "Proponer nuevos conceptos",
  "Construir una comunidad recurrente",
  "Hacer que la gente quiera volver al siguiente evento",
];

export function LocalFaceSection() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ImagePlaceholder
            label="Event creator recibiendo/conectando invitados, momento cándido"
            aspect="aspect-[4/5]"
            className="order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <Eyebrow>El rol</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Conviértete en la cara local de Junto
            </h2>
            <Divider className="mt-6" />

            <p className="mt-8 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
              Queremos que nuestros Event Creators tengan personalidad.
            </p>

            <ul className="mt-8 space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-junto-ink/85 sm:text-lg">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-junto-coral" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 space-y-1.5 text-base leading-relaxed sm:text-lg">
              <p className="text-junto-ink/75">No buscamos eventos impersonales.</p>
              <p className="font-semibold text-junto-ink">
                Queremos eventos que tengan una persona detrás.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
