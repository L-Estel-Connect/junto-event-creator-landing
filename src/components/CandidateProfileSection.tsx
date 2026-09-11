import { Container, Divider, Eyebrow } from "./ui";

const criteria = [
  "Vives en Madrid",
  "Eres muy social y te resulta natural hablar con gente nueva",
  "Conoces bien la ciudad",
  "Te gusta reunir personas",
  "Puedes encontrar y negociar con venues",
  "Tienes iniciativa y mentalidad emprendedora",
  "Eres organizado/a y fiable",
  "Te sientes cómodo/a siendo visible y representando una marca",
  "Entiendes Instagram y TikTok",
  "Puedes crear contenido o trabajar con personas que lo creen",
  "Hablas español y tienes buen nivel de inglés",
  "Eres inclusivo/a y sabes hacer sentir cómoda a gente muy diferente",
  "Tienes disponibilidad para organizar y asistir presencialmente a eventos",
];

export function CandidateProfileSection() {
  return (
    <section className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>El perfil</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          ¿Eres tú?
        </h2>
        <Divider className="mt-6" />

        <p className="mt-8 text-base leading-relaxed text-junto-ink/75 sm:text-lg">
          Podrías encajar muy bien si...
        </p>

        <ul className="mt-6 space-y-3.5">
          {criteria.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-junto-ink/85 sm:text-lg">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-junto-coral" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-3 text-base leading-relaxed sm:text-lg">
          <p className="text-junto-ink/75">
            No necesitas haber trabajado profesionalmente como event manager.
          </p>
          <p className="font-semibold text-junto-ink">
            Si ya eres “la persona que organiza los planes” dentro de tu grupo, queremos
            conocerte.
          </p>
        </div>
      </Container>
    </section>
  );
}
