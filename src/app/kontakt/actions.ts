"use server";

import { z } from "zod";
import { serviceOptions, type InquiryField, type InquiryState } from "@/lib/inquiry";

const schema = z.object({
  name: z.string().trim().min(3, "Vyplňte prosím jméno a příjmení."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s]{9,16}$/, "Zadejte prosím telefon, například 777 123 456."),
  email: z.union([z.literal(""), z.email("Zadejte prosím platný e-mail.")]),
  service: z.enum(serviceOptions.map((o) => o.value) as [string, ...string[]], {
    message: "Vyberte prosím, o co máte zájem.",
  }),
  message: z.string().trim().max(2000, "Zpráva je příliš dlouhá.").optional(),
  consent: z.literal("on", { message: "Bez souhlasu vám nemůžeme odpovědět." }),
});

export async function sendInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  const raw = Object.fromEntries(
    ["name", "phone", "email", "service", "message", "consent"].map((k) => [k, String(formData.get(k) ?? "")]),
  );
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const errors: InquiryState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as InquiryField;
      errors[key] ??= issue.message;
    }
    return { status: "error", errors, values: raw };
  }

  // Delivery is not connected in the demo. Before launch, send `parsed.data`
  // to info@autoskolatop.cz (e.g. through an email provider) here.
  console.info("[poptávka]", parsed.data);

  return { status: "success" };
}
