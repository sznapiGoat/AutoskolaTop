import Link from "next/link";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/lib/site";

/** Thumb-reach call + signup actions on phones, where most visitors arrive. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={site.phoneHref} className={buttonClass("outline", "md")}>
          <Phone size={18} weight="bold" aria-hidden="true" />
          Zavolat
        </a>
        <Link href="/kontakt" className={buttonClass("primary", "md")}>
          Chci řidičák
        </Link>
      </div>
    </div>
  );
}
