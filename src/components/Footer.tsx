import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-junto-ink/10 py-10">
      <Container className="flex flex-col items-center gap-3 text-sm text-junto-ink/60 sm:flex-row sm:justify-between">
        <p className="font-semibold text-junto-ink">Junto</p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com/junto.xo"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-junto-coral"
          >
            @junto.xo
          </a>
          <a href="mailto:contact@getjunto.co" className="hover:text-junto-coral">
            contact@getjunto.co
          </a>
        </div>
      </Container>
    </footer>
  );
}
