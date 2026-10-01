import Link from "next/link";
import { IconCheck } from "@/components/icons/Icons";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";
import { plans } from "@/lib/content";
import { formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PlanCards({ compact = false }: { compact?: boolean }) {
  return (
    <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <RevealItem
          key={plan.id}
          className={cn(
            "relative flex flex-col rounded-[var(--radius-card)] p-7",
            plan.featured ? "border-2 border-accent bg-white shadow-soft" : "border border-line bg-white",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
            {plan.badge && (
              <span
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-semibold",
                  plan.featured ? "bg-accent text-on-accent" : "bg-surface text-ink",
                )}
              >
                {plan.badge}
              </span>
            )}
          </div>
          <p className="mt-1 min-h-10 text-sm text-muted">{plan.forWho}</p>
          <p className="mt-6 font-display text-4xl font-bold tabular-nums tracking-tight">{formatPrice(plan.price)}</p>
          <p className="mt-1 text-sm text-muted">
            {plan.duration}, {plan.frequency}
          </p>
          {!compact && (
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[0.95rem]">
                  <IconCheck size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          {/* spacer keeps every card's button on the same line */}
          <div className="min-h-7 flex-1" />
          <Link
            href={`/kontakt?kurz=${plan.id}`}
            className={buttonClass(plan.featured ? "primary" : "outline", "md", "mt-auto w-full")}
          >
            Vybrat {plan.name}
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
