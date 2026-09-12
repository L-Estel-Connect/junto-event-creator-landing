import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-junto-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-junto-coral sm:text-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <span className={`block h-[2px] w-12 bg-junto-coral ${className}`} aria-hidden="true" />;
}

type CtaBaseProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

const baseCtaClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-junto-coral";

const variantClasses: Record<NonNullable<CtaBaseProps["variant"]>, string> = {
  primary: "bg-junto-coral text-white hover:bg-[#e14944]",
  secondary: "border border-junto-ink/25 text-junto-ink hover:border-junto-coral hover:text-junto-coral",
};

export function CtaLink({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: CtaBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`${baseCtaClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function CtaButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: CtaBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseCtaClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden border border-dashed border-junto-ink/20 bg-junto-ink/[0.03] ${className}`}
    >
      <div className="px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-junto-ink/40">
          Foto pendiente
        </p>
        <p className="mt-1 text-sm text-junto-ink/50">{label}</p>
      </div>
    </div>
  );
}
