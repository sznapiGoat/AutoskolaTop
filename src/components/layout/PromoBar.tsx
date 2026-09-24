import Link from "next/link";
import { IconArrowRight } from "@/components/icons/Icons";
import { PromoGate } from "@/components/ui/PromoGate";
import { formatPrice, promo } from "@/lib/site";

export function PromoBar() {
  return (
    <PromoGate>
      <div className="bg-[#151514] text-[#f2f1ee] dark:bg-surface-2">
        <Link
          href="/cenik"
          className="container-page group flex min-h-10 items-center justify-center gap-2 py-2 text-center text-sm"
        >
          <span>
            {promo.label} <strong className="font-semibold text-accent">{formatPrice(promo.price)}</strong>{" "}
            {promo.untilLabel}
          </span>
          <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </PromoGate>
  );
}
