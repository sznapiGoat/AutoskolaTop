"use client";

import { motion } from "framer-motion";
import AnimatedAccordion, {
  type AccordionItem,
} from "@/components/ui/AnimatedAccordion";

const faqItems: AccordionItem[] = [
  {
    question: "Jak probíhá platba za kurz?",
    answer:
      "Platíte ve 2 splátkách bez navýšení. Záloha 10.000 Kč při nástupu do kurzu, doplatek nejpozději 14 dní před závěrečnou zkouškou.",
  },
  {
    question: "Co cena kurzu zahrnuje?",
    answer:
      "Kompletní výuku, výcvik a první závěrečnou zkoušku. Součástí každého kurzu je také zkouška na nečisto a jízda do Prahy. Cena nezahrnuje správní poplatek magistrátu.",
  },
  {
    question: "Jak dlouho kurz trvá?",
    answer:
      "Standard a Student trvají 2 až 3 měsíce s jízdami 2x týdně. Expres a VIP zvládnete za 1 až 1,5 měsíce s jízdami až 5x týdně.",
  },
  {
    question: "Kdy můžu s kurzem začít?",
    answer:
      "Výcvik lze zahájit již v 17,5 letech, řidičský průkaz získáte v 18. Stačí posudek o zdravotní způsobilosti od lékaře a vyplněná žádost o přijetí k výuce a výcviku.",
  },
  {
    question: "Co když se na jízdu nemůžu dostavit?",
    answer:
      "Omluvte se prosím nejméně 8 hodin předem, omluvená jízda je zdarma. Nedostavení bez omluvy je zpoplatněno 500 Kč, nedostavení ke státní zkoušce 1.000 Kč.",
  },
  {
    question: "Jak funguje bonus za kamaráda?",
    answer:
      "Za každého kamaráda, kterého k nám přivedete, dostanete 500 Kč. Počet kamarádů není omezen, přiveďte celou třídu a máte řidičák zdarma.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
            Časté otázky
          </h2>
          <p className="mt-4 text-center text-lg italic text-muted">
            Vše, co potřebujete vědět, než k nám nastoupíte
          </p>
          <div className="mt-10">
            <AnimatedAccordion items={faqItems} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
