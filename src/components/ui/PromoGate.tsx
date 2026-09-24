"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { isPromoActive } from "@/lib/site";

const subscribe = () => () => {};

/** Renders children only while the promo runs. Checked at build time and again in the browser, so it expires without a rebuild. */
export function PromoGate({ children }: { children: ReactNode }) {
  const active = useSyncExternalStore(subscribe, () => isPromoActive(), () => isPromoActive());
  return active ? children : null;
}
