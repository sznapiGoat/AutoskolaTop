import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[70dvh] place-items-center py-20 text-center">
      <div>
        <LogoMark className="mx-auto size-20" animated />
        <h1 className="mt-8 font-display text-5xl font-extrabold md:text-6xl">Tady cesta končí.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          Tuhle stránku jsme nenašli. Otočte to a zkuste to znovu z úvodní stránky.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Na úvod
          </ButtonLink>
          <ButtonLink href="/kontakt" size="lg" variant="outline">
            Kontakt
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
