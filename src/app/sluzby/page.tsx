import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTABanner from "@/components/sections/CTABanner";
import PageHeader from "@/components/sections/PageHeader";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Služby | Autoškola TOP Rakovník",
  description:
    "Řidičský průkaz sk. B, jízdy do Prahy, kurz parkování, kondiční jízdy, školení řidičů referentů a vrácení řidičského průkazu v Rakovníku.",
};

export default function SluzbyPage() {
  return (
    <>
      <PageHeader
        title="Naše služby"
        subtitle="Od prvního řidičáku po návrat za volant. Vyberte si, co potřebujete."
      />

      <ServiceDetail
        title="Řidičský průkaz sk. B"
        description={[
          "Kompletní výcvik pro získání řidičského oprávnění skupiny B. Provedeme vás teorií i praktickými jízdami v moderním klimatizovaném voze, vlastním tempem a bez stresu.",
          "Součástí kurzu je zkouška na nečisto i jízda do Prahy, abyste byli připraveni na skutečný provoz, ne jen na zkušební okruh.",
        ]}
        image={images.prukazB}
        alt="Vzor českého řidičského průkazu, přední a zadní strana"
        imageRight
        imageContain
        listTitle="Podmínky pro přijetí"
        listItems={[
          "Věk 18 let (výcvik lze zahájit již v 17,5 letech)",
          "Posudek o zdravotní způsobilosti od lékaře",
          "Vyplněná žádost o přijetí k výuce a výcviku",
          "Trvalý nebo přechodný pobyt na území ČR",
        ]}
        ctaHref="/cenik"
        ctaLabel="Zobrazit ceník"
      />

      <ServiceDetail
        title="Jízdy do Prahy"
        description={[
          "Připravíme vás nejen na zkoušky, ale i na provoz v hlavním městě. Hustý provoz, víceproudé komunikace, tramvaje i kruhové objezdy zvládnete s klidem.",
          "Jízda do Prahy je součástí všech našich kurzů sk. B. Jistota z velkého města se vám bude hodit celý život.",
        ]}
        image={images.praha}
        alt="Jízda pražskou ulicí s Národním muzeem v pozadí"
        muted
      />

      <ServiceDetail
        title="Kurz parkování"
        description={[
          "5 lekcí po 45 minutách. Zbavíme vás fobie z parkování.",
          "Podélné, kolmé i šikmé parkování natrénujete v reálných situacích, dokud si nebudete jistí. Kurz je vhodný pro každého, kdo už řidičák má, ale parkování ho stresuje.",
        ]}
        image={images.parkovani}
        alt="Nácvik podélného parkování s instruktorem"
        imageRight
        priceBadge="3.600 Kč"
      />

      <ServiceDetail
        title="Kondiční jízdy"
        description={[
          "Dlouho jste neřídili? Pomůžeme vám získat zpět jistotu za volantem.",
          "Jezdíme tam, kde to potřebujete: po městě, po okrese i do Prahy. Tempo a náplň lekcí přizpůsobíme přesně vám.",
        ]}
        image={images.kondicni}
        alt="Kondiční jízda s instruktorem autoškoly"
        priceBadge="750 Kč / lekce"
        muted
      />

      <ServiceDetail
        title="Školení řidičů referentů"
        description={[
          "Zaměstnavatel je ze zákona povinen zajistit školení řidičů referentů pro všechny zaměstnance, kteří při výkonu práce řídí služební nebo soukromé vozidlo.",
          "Školení provádíme pro firmy i jednotlivce, prezenčně v naší učebně nebo po domluvě přímo u vás ve firmě. Po absolvování obdržíte potvrzení o školení.",
        ]}
        image={images.skoleni}
        alt="Školení řidičů referentů v učebně"
        imageRight
        priceBadge="500 Kč"
      />

      <ServiceDetail
        title="Vrácení řidičského průkazu"
        description={[
          "Přišli jste o řidičák kvůli vybodování, zákazu řízení nebo ze zdravotních důvodů? Připravíme vás na přezkoušení z odborné způsobilosti a pomůžeme vám vrátit se za volant.",
          "Přezkoušení zahrnuje 2 lekce po 45 minutách jízd a test z pravidel provozu.",
        ]}
        image={images.vraceni}
        alt="Přezkoušení z odborné způsobilosti pro vrácení řidičského průkazu"
        priceBadge="5.900 Kč"
        listTitle="Doklady k přezkoušení"
        listItems={[
          "Platný občanský průkaz",
          "Posudek o zdravotní způsobilosti od lékaře",
          "Rozhodnutí o odnětí řidičského oprávnění, případně výpis z bodového hodnocení",
          "Žádost o vrácení řidičského oprávnění",
        ]}
        muted
      />

      <CTABanner />
    </>
  );
}
