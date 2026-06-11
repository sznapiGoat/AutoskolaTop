"use client";

import { motion, type Variants } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import { images } from "@/lib/site";

const features = [
  {
    title: "Lidský přístup",
    image: images.procMy,
    alt: "Instruktor autoškoly v klidu vysvětluje žákovi ovládání vozu",
    text: "Žádný křik, jen klid a pohoda. Moderní klimatizované auto, bonus 500 Kč a instruktor, který vás nenechá ve štychu.",
  },
  {
    title: "Naučíme vás opravdu řídit",
    image: images.sNami,
    alt: "Žák autoškoly za volantem během cvičné jízdy",
    text: "Probíráme každý krok v tempu, které vám sedí. Připravíme vás do reálného provozu, nejen na zkoušky.",
  },
  {
    title: "Řidičák skoro zadarmo",
    image: images.bonus,
    alt: "Spokojení absolventi autoškoly s řidičskými průkazy",
    text: "Za každého kamaráda, kterého přivedete, dostanete 500 Kč. Přiveďte celou třídu a máte řidičák zdarma.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-body sm:text-4xl">
            Proč Autoškola TOP?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg italic text-muted">
            Tři důvody, proč k nám jezdí žáci z celého Rakovnicka
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-line bg-white"
            >
              <div className="relative aspect-[4/3]">
                <SafeImage
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-body">{feature.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {feature.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
