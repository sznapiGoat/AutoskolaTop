"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "Výcvik pro získání ŘP sk. B",
  "Kondiční jízdy",
  "Kurz parkování",
  "Vrácení řidičského průkazu",
  "Školení řidičů referentů",
  "Jiné",
] as const;

const schema = z.object({
  name: z.string().min(3, "Vyplňte prosím jméno a příjmení."),
  email: z.string().email("Zadejte prosím platný e-mail."),
  phone: z
    .string()
    .min(9, "Zadejte prosím platné telefonní číslo.")
    .regex(/^[+\d\s]+$/, "Telefon může obsahovat jen číslice a mezery."),
  service: z.enum(services, { message: "Vyberte prosím službu." }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-body placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors duration-200";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const onSubmit = async (data: FormData) => {
    // Demo only: log the inquiry instead of sending it to a backend.
    console.log("Poptávka z webu:", data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
        Objednejte se
      </h2>
      <p className="mt-3 text-base text-muted">
        Vyplňte formulář a ozveme se vám do 24 hodin.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
        noValidate
      >
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-body">
            Jméno a příjmení <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jan Novák"
            className={cn(inputClass, errors.name && "border-red-500")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-body">
            E-mail <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jan.novak@email.cz"
            className={cn(inputClass, errors.email && "border-red-500")}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-body">
            Telefonní číslo <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="777 123 456"
            className={cn(inputClass, errors.phone && "border-red-500")}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-body">
            Zvolená služba <span className="text-accent">*</span>
          </label>
          <select
            id="service"
            defaultValue=""
            className={cn(inputClass, errors.service && "border-red-500")}
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            <option value="" disabled>
              Vyberte službu
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-body">
            Zpráva
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Kdy byste chtěli začít? Máte nějaké otázky?"
            className={inputClass}
            {...register("message")}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting && (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
        </button>
      </form>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-xl"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-body">
                Poptávka odeslána
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Děkujeme, ozveme se vám do 24 hodin.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
