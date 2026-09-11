import Link from "next/link";
import { Container, CtaLink } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-junto-ink/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center" aria-label="Junto">
          {/*
            LOGO PLACEHOLDER
            Replace this block with the official Junto logo asset once it is
            added to /public (e.g. /public/logo.svg), for example:
            <Image src="/logo.svg" alt="Junto" width={110} height={32} priority />
          */}
          <span className="flex h-9 items-center border border-dashed border-junto-ink/25 px-3 text-sm font-semibold tracking-tight text-junto-ink/60">
            JUNTO LOGO
          </span>
        </Link>
        <CtaLink href="#aplicar" variant="primary" className="px-5 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-sm">
          Aplicar ahora
        </CtaLink>
      </Container>
    </header>
  );
}
