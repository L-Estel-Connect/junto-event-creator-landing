"use client";

import { FormEvent, useState } from "react";
import { Container, Divider, Eyebrow } from "./ui";
import { VideoUpload } from "./VideoUpload";

type YesNo = "" | "si" | "no";
type YesNoSome = "" | "si" | "no" | "algo";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
  experiencia: string;
  negociarVenues: YesNo;
  contenido: YesNoSome;
  serCara: YesNo;
  disponibilidad: YesNo;
  freelance: YesNo;
  inicio: string;
};

const initialState: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  ciudad: "",
  instagram: "",
  tiktok: "",
  linkedin: "",
  experiencia: "",
  negociarVenues: "",
  contenido: "",
  serCara: "",
  disponibilidad: "",
  freelance: "",
  inicio: "",
};

type Errors = Partial<Record<keyof FormState, string>> & { video?: string };

const inputClasses =
  "w-full border border-junto-ink/20 bg-white px-4 py-3 text-base text-junto-ink placeholder:text-junto-ink/35 focus:border-junto-coral focus:outline-none";

const labelClasses = "block text-sm font-semibold text-junto-ink";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-sm font-medium text-junto-coral">
      {message}
    </p>
  );
}

function RadioGroup<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const checked = value === option.value;
        return (
          <label
            key={option.value}
            className={`cursor-pointer border px-5 py-2.5 text-sm font-medium transition-colors ${
              checked
                ? "border-junto-coral bg-junto-coral/10 text-junto-ink"
                : "border-junto-ink/20 text-junto-ink/70 hover:border-junto-ink/40"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={checked}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}

export function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [video, setVideo] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.nombre.trim()) next.nombre = "Indica tu nombre completo.";
    if (!form.email.trim()) {
      next.email = "Indica tu email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Introduce un email válido.";
    }
    if (!form.telefono.trim()) next.telefono = "Indica tu teléfono.";
    if (!form.ciudad.trim()) next.ciudad = "Indica tu ciudad.";
    if (!form.experiencia.trim()) next.experiencia = "Cuéntanos brevemente tu experiencia.";
    if (!form.negociarVenues) next.negociarVenues = "Selecciona una opción.";
    if (!form.contenido) next.contenido = "Selecciona una opción.";
    if (!form.serCara) next.serCara = "Selecciona una opción.";
    if (!form.disponibilidad) next.disponibilidad = "Selecciona una opción.";
    if (!form.freelance) next.freelance = "Selecciona una opción.";
    if (!form.inicio) next.inicio = "Selecciona cuándo podrías empezar.";
    if (!video) next.video = "Sube tu vídeo de presentación.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    } else {
      const firstErrorField = document.querySelector("[data-error='true']");
      firstErrorField?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  if (submitted) {
    return (
      <section id="formulario" className="border-t border-junto-ink/10 py-20 sm:py-28">
        <Container className="max-w-2xl text-center">
          <Eyebrow>Candidatura completada</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Gracias, {form.nombre.split(" ")[0] || "candidato/a"}.
          </h2>
          <div className="mx-auto mt-6 max-w-lg border border-junto-ink/15 bg-junto-ink/[0.03] px-6 py-6 text-left text-sm leading-relaxed text-junto-ink/70">
            <p className="font-semibold text-junto-ink">
              Esto es un prototipo de la página.
            </p>
            <p className="mt-2">
              Tus respuestas y tu vídeo se han validado correctamente en este navegador, pero{" "}
              <strong>no se han enviado ni guardado en ningún sitio</strong>. Todavía no hay un
              servicio real de recepción de candidaturas conectado a este formulario.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="formulario" className="border-t border-junto-ink/10 py-20 sm:py-28">
      <Container className="max-w-2xl">
        <Eyebrow>Formulario de candidatura</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Cuéntanos sobre ti</h2>
        <Divider className="mt-6" />

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-10">
          <fieldset className="space-y-6">
            <legend className="text-sm font-semibold uppercase tracking-[0.1em] text-junto-ink/50">
              Datos de contacto
            </legend>

            <div data-error={Boolean(errors.nombre)}>
              <label className={labelClasses} htmlFor="nombre">
                Nombre completo
              </label>
              <input
                id="nombre"
                className={`mt-2 ${inputClasses}`}
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
              />
              <FieldError message={errors.nombre} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div data-error={Boolean(errors.email)}>
                <label className={labelClasses} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`mt-2 ${inputClasses}`}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                <FieldError message={errors.email} />
              </div>

              <div data-error={Boolean(errors.telefono)}>
                <label className={labelClasses} htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className={`mt-2 ${inputClasses}`}
                  value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                />
                <FieldError message={errors.telefono} />
              </div>
            </div>

            <div data-error={Boolean(errors.ciudad)}>
              <label className={labelClasses} htmlFor="ciudad">
                Ciudad
              </label>
              <input
                id="ciudad"
                className={`mt-2 ${inputClasses}`}
                value={form.ciudad}
                onChange={(e) => update("ciudad", e.target.value)}
              />
              <FieldError message={errors.ciudad} />
            </div>
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="text-sm font-semibold uppercase tracking-[0.1em] text-junto-ink/50">
              Redes sociales
            </legend>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label className={labelClasses} htmlFor="instagram">
                  Instagram
                </label>
                <input
                  id="instagram"
                  className={`mt-2 ${inputClasses}`}
                  placeholder="@usuario"
                  value={form.instagram}
                  onChange={(e) => update("instagram", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses} htmlFor="tiktok">
                  TikTok
                </label>
                <input
                  id="tiktok"
                  className={`mt-2 ${inputClasses}`}
                  placeholder="@usuario"
                  value={form.tiktok}
                  onChange={(e) => update("tiktok", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses} htmlFor="linkedin">
                  LinkedIn
                </label>
                <input
                  id="linkedin"
                  className={`mt-2 ${inputClasses}`}
                  placeholder="linkedin.com/in/..."
                  value={form.linkedin}
                  onChange={(e) => update("linkedin", e.target.value)}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-8">
            <legend className="text-sm font-semibold uppercase tracking-[0.1em] text-junto-ink/50">
              Sobre ti
            </legend>

            <div data-error={Boolean(errors.experiencia)}>
              <label className={labelClasses} htmlFor="experiencia">
                ¿Tienes experiencia organizando eventos, creando comunidades o reuniendo
                personas?
              </label>
              <textarea
                id="experiencia"
                rows={4}
                className={`mt-2 ${inputClasses}`}
                value={form.experiencia}
                onChange={(e) => update("experiencia", e.target.value)}
              />
              <FieldError message={errors.experiencia} />
            </div>

            <div data-error={Boolean(errors.negociarVenues)}>
              <p className={labelClasses}>
                ¿Te sentirías cómodo/a buscando y negociando venues en Madrid con el apoyo de
                nuestro equipo?
              </p>
              <div className="mt-3">
                <RadioGroup
                  name="negociarVenues"
                  value={form.negociarVenues}
                  onChange={(value) => update("negociarVenues", value)}
                  options={[
                    { value: "si", label: "Sí" },
                    { value: "no", label: "No" },
                  ]}
                />
              </div>
              <FieldError message={errors.negociarVenues} />
            </div>

            <div data-error={Boolean(errors.contenido)}>
              <p className={labelClasses}>
                ¿Tienes experiencia creando contenido para Instagram o TikTok?
              </p>
              <div className="mt-3">
                <RadioGroup
                  name="contenido"
                  value={form.contenido}
                  onChange={(value) => update("contenido", value)}
                  options={[
                    { value: "si", label: "Sí" },
                    { value: "no", label: "No" },
                    { value: "algo", label: "Algo de experiencia" },
                  ]}
                />
              </div>
              <FieldError message={errors.contenido} />
            </div>

            <div data-error={Boolean(errors.serCara)}>
              <p className={labelClasses}>
                ¿Te sentirías cómodo/a siendo una de las caras de Junto en Madrid?
              </p>
              <div className="mt-3">
                <RadioGroup
                  name="serCara"
                  value={form.serCara}
                  onChange={(value) => update("serCara", value)}
                  options={[
                    { value: "si", label: "Sí" },
                    { value: "no", label: "No" },
                  ]}
                />
              </div>
              <FieldError message={errors.serCara} />
            </div>

            <div data-error={Boolean(errors.disponibilidad)}>
              <p className={labelClasses}>
                ¿Tienes disponibilidad para organizar y asistir presencialmente a eventos?
              </p>
              <div className="mt-3">
                <RadioGroup
                  name="disponibilidad"
                  value={form.disponibilidad}
                  onChange={(value) => update("disponibilidad", value)}
                  options={[
                    { value: "si", label: "Sí" },
                    { value: "no", label: "No" },
                  ]}
                />
              </div>
              <FieldError message={errors.disponibilidad} />
            </div>

            <div data-error={Boolean(errors.freelance)}>
              <p className={labelClasses}>
                ¿Te sientes cómodo/a trabajando bajo un modelo freelance con remuneración
                variable basada en resultados?
              </p>
              <div className="mt-3">
                <RadioGroup
                  name="freelance"
                  value={form.freelance}
                  onChange={(value) => update("freelance", value)}
                  options={[
                    { value: "si", label: "Sí" },
                    { value: "no", label: "No" },
                  ]}
                />
              </div>
              <FieldError message={errors.freelance} />
            </div>

            <div data-error={Boolean(errors.inicio)}>
              <label className={labelClasses} htmlFor="inicio">
                ¿Cuándo podrías empezar?
              </label>
              <select
                id="inicio"
                className={`mt-2 ${inputClasses}`}
                value={form.inicio}
                onChange={(e) => update("inicio", e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                <option value="inmediatamente">Inmediatamente</option>
                <option value="2-semanas">En 2 semanas</option>
                <option value="1-mes">En 1 mes</option>
                <option value="mas-adelante">Más adelante</option>
              </select>
              <FieldError message={errors.inicio} />
            </div>
          </fieldset>

          <fieldset className="space-y-6" data-error={Boolean(errors.video)}>
            <legend className="text-sm font-semibold uppercase tracking-[0.1em] text-junto-ink/50">
              Vídeo de presentación
            </legend>

            <div className="space-y-4 text-base leading-relaxed text-junto-ink/75">
              <p>Envíanos un vídeo de 1–2 minutos respondiendo:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>¿Por qué crees que serías un/a gran Junto Event Creator?</li>
                <li>
                  ¿Qué te hace diferente?
                  <p className="mt-1 text-sm text-junto-ink/60">
                    Puede ser tu energía, tu red social, tu conocimiento de Madrid, tu
                    creatividad, tu experiencia, tu capacidad para reunir personas o simplemente
                    tu personalidad.
                  </p>
                </li>
                <li>
                  Si tuvieras que organizar tu primer evento Junto en Madrid el próximo mes, ¿qué
                  harías?
                </li>
              </ol>
              <p className="font-medium text-junto-ink">
                Queremos conocer tu energía y tus ideas, no ver un vídeo perfecto.
              </p>
            </div>

            <VideoUpload file={video} onChange={setVideo} error={errors.video} />
          </fieldset>

          <button
            type="submit"
            className="w-full bg-junto-coral px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#e14944] sm:w-auto"
          >
            Enviar candidatura
          </button>
        </form>
      </Container>
    </section>
  );
}
