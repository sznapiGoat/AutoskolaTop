"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle, CircleNotch, WarningCircle } from "@phosphor-icons/react";
import { sendInquiry } from "@/app/kontakt/actions";
import { serviceOptions, type InquiryState } from "@/lib/inquiry";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const initial: InquiryState = { status: "idle" };

const field =
  "w-full rounded-xl border bg-surface px-4 py-3 text-base text-ink placeholder:text-[#8a8983] transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20";

function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {required && <span className="text-accent-text"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-sm font-medium text-[#c2410c] dark:text-[#ff9a5c]">
          <WarningCircle size={16} weight="fill" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const params = useSearchParams();
  const preselected = params.get("kurz") ?? params.get("sluzba") ?? "";
  const [state, action, pending] = useActionState(sendInquiry, initial);
  const e = state.errors ?? {};
  const v = state.values ?? {};
  const describedBy = (id: string, hasHint = false) =>
    e[id as keyof typeof e] ? `${id}-error` : hasHint ? `${id}-hint` : undefined;

  return (
    <AnimatePresence mode="wait">
      {state.status === "success" ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[var(--radius-card)] border border-line bg-surface p-8 md:p-10"
          role="status"
        >
          <CheckCircle size={48} weight="fill" className="text-accent" aria-hidden="true" />
          <h2 className="mt-6 font-display text-3xl font-bold">Děkujeme, máme to.</h2>
          <p className="mt-3 max-w-md text-lg text-muted">
            Ozveme se vám co nejdřív, obvykle telefonicky. Pokud spěcháte, zavolejte na{" "}
            <a href={site.phoneHref} className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          action={action}
          noValidate
          exit={{ opacity: 0, y: -16 }}
          className="grid gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-10"
        >
          <div>
            <h2 className="font-display text-3xl font-bold">Nezávazná přihláška</h2>
            <p className="mt-2 text-muted">Vyplňte pár údajů a my se vám ozveme s termínem.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Jméno a příjmení" error={e.name} required>
              <input
                id="name"
                name="name"
                autoComplete="name"
                defaultValue={v.name}
                aria-invalid={!!e.name}
                aria-describedby={describedBy("name")}
                className={cn(field, e.name ? "border-[#c2410c]" : "border-line")}
              />
            </Field>
            <Field id="phone" label="Telefon" error={e.phone} required>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                defaultValue={v.phone}
                aria-invalid={!!e.phone}
                aria-describedby={describedBy("phone")}
                className={cn(field, e.phone ? "border-[#c2410c]" : "border-line")}
              />
            </Field>
          </div>

          <Field id="email" label="E-mail" error={e.email} hint="Nepovinné. Hodí se, když vám máme poslat žádost.">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={v.email}
              aria-invalid={!!e.email}
              aria-describedby={describedBy("email", true)}
              className={cn(field, e.email ? "border-[#c2410c]" : "border-line")}
            />
          </Field>

          <Field id="service" label="O co máte zájem" error={e.service} required>
            <select
              id="service"
              name="service"
              defaultValue={v.service ?? (serviceOptions.some((o) => o.value === preselected) ? preselected : "")}
              aria-invalid={!!e.service}
              aria-describedby={describedBy("service")}
              className={cn(field, "appearance-none bg-[right_1rem_center] bg-no-repeat pr-10", e.service ? "border-[#c2410c]" : "border-line")}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 256 256'%3E%3Cpath fill='%238a8983' d='M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z'/%3E%3C/svg%3E\")",
              }}
            >
              <option value="" disabled>
                Vyberte službu
              </option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          <Field id="message" label="Zpráva" error={e.message} hint="Např. kdy můžete jezdit nebo na co se chcete zeptat.">
            <textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={v.message}
              aria-describedby={describedBy("message", true)}
              className={cn(field, "resize-y", e.message ? "border-[#c2410c]" : "border-line")}
            />
          </Field>

          {/* honeypot */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor="company">Firma</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-2">
            <label className="flex items-start gap-3 text-sm leading-relaxed">
              <input
                type="checkbox"
                name="consent"
                defaultChecked={v.consent === "on"}
                aria-invalid={!!e.consent}
                aria-describedby={e.consent ? "consent-error" : undefined}
                className="mt-0.5 size-5 shrink-0 accent-[var(--accent)]"
              />
              <span className="text-muted">
                Souhlasím se zpracováním osobních údajů za účelem odpovědi na můj dotaz.{" "}
                <Link href="/ochrana-osobnich-udaju" className="font-medium text-ink underline underline-offset-2">
                  Více informací
                </Link>
              </span>
            </label>
            {e.consent && (
              <p id="consent-error" className="flex items-center gap-1.5 text-sm font-medium text-[#c2410c] dark:text-[#ff9a5c]">
                <WarningCircle size={16} weight="fill" aria-hidden="true" />
                {e.consent}
              </p>
            )}
          </div>

          <button type="submit" disabled={pending} className={buttonClass("primary", "lg", "mt-2 w-full disabled:opacity-70 sm:w-auto sm:justify-self-start")}>
            {pending && <CircleNotch size={18} weight="bold" className="animate-spin" aria-hidden="true" />}
            {pending ? "Odesílám" : "Odeslat přihlášku"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
