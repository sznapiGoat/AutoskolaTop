export const serviceOptions = [
  { value: "ridicsky-prukaz-b", label: "Řidičák sk. B (variantu ještě nevím)" },
  { value: "standard", label: "Řidičák sk. B: Standard" },
  { value: "student", label: "Řidičák sk. B: Student" },
  { value: "expres", label: "Řidičák sk. B: Expres" },
  { value: "vip", label: "Řidičák sk. B: VIP" },
  { value: "kurz-parkovani", label: "Kurz parkování" },
  { value: "kondicni-jizdy", label: "Kondiční jízdy" },
  { value: "jizdy-do-prahy", label: "Jízdy do Prahy" },
  { value: "skoleni-ridicu", label: "Školení řidičů referentů" },
  { value: "vraceni-ridicskeho-prukazu", label: "Vrácení řidičského průkazu" },
  { value: "jine", label: "Něco jiného" },
] as const;

export type InquiryField = "name" | "phone" | "email" | "service" | "message" | "consent";

export type InquiryState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<InquiryField, string>>;
  values?: Record<string, string>;
};
