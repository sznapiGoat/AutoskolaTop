import Link from "next/link";
import { Check } from "@phosphor-icons/react/dist/ssr";
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
            plan.featured ? "bg-panel text-panel-ink" : "border border-line bg-surface",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
            {plan.badge && (
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  plan.featured ? "bg-accent text-on-accent" : "bg-surface-2 text-ink",
                )}
              >
                {plan.badge}
              </span>
            )}
          </div>
          <p className={cn("mt-1 text-sm", plan.featured ? "text-panel-ink/70" : "text-muted")}>{plan.forWho}</p>
          <p className="mt-6 font-display text-4xl font-bold tabular-nums tracking-tight">{formatPrice(plan.price)}</p>
          <p className={cn("mt-1 text-sm", plan.featured ? "text-panel-ink/70" : "text-muted")}>
            {plan.duration}, {plan.frequency}
          </p>
          {!compact && (
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[0.95rem]">
                  <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          <Link
            href={`/kontakt?kurz=${plan.id}`}
            className={buttonClass(plan.featured ? "primary" : "outline", "md", "mt-7 w-full")}
          >
            Vybrat {plan.name}
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
