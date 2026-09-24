export type Service = {
  slug: string;
  name: string;
  /** Short name for cards and nav. */
  short: string;
  /** One-line pitch used on cards (max ~12 words). */
  pitch: string;
  /** SEO title and description. */
  seoTitle: string;
  seoDescription: string;
  lead: string;
  price: number;
  priceNote: string;
  pricePrefix?: string;
  image: string;
  imageAlt: string;
  body: { heading: string; text: string[]; list?: string[] }[];
  highlights: string[];
  faqIds: string[];
};

export const services: Service[] = [
  {
    slug: "ridicsky-prukaz-b",
    name: "Řidičský průkaz skupiny B",
    short: "Řidičák sk. B",
    pitch: "Kompletní kurz od první hodiny teorie po závěrečnou zkoušku.",
    seoTitle: "Řidičský průkaz sk. B Rakovník",
    seoDescription:
      "Kurz řidičského průkazu skupiny B v Rakovníku. 28 hodin jízd, zkouška nanečisto a jízda do Prahy v ceně. Platba ve 2 splátkách bez navýšení.",
    lead:
      "Naučíme vás řídit tak, abyste zvládli nejen zkoušku, ale hlavně běžný provoz. V klidném tempu, bez křiku a v pohodlném voze s klimatizací.",
    price: 18500,
    pricePrefix: "od",
    priceNote: "4 varianty kurzu, platba ve 2 splátkách",
    image: "/images/autoskola-top-instruktor-vuz.webp",
    imageAlt: "Instruktor Autoškoly TOP ve výcvikovém voze Renault Captur v Rakovníku",
    highlights: [
      "28 hodin praktických jízd",
      "Zkouška nanečisto v ceně",
      "Jízda do Prahy během kurzu",
      "První závěrečná zkouška v ceně",
    ],
    body: [
      {
        heading: "Co budete moci řídit",
        text: [
          "Osobní automobil nebo dodávku do 3,5 t a s nejvýše 8 místy k sezení kromě místa řidiče. Za vůz smíte zapojit přívěs do 750 kg, případně i těžší, pokud celá souprava nepřesáhne 3 500 kg.",
        ],
        list: [
          "Vozidla B1 (lehké čtyřkolky a mikroauta) v ČR i v zahraničí",
          "Vozidla AM (skútry a motorky do 45 km/h a 50 ccm) v ČR i v zahraničí",
          "Motocykly A1 s automatickou převodovkou do 125 ccm, pouze v ČR",
          "Tříkolky nad 15 kW od 21 let, pouze v ČR",
        ],
      },
      {
        heading: "Podmínky pro získání řidičáku",
        text: [
          "Kurz můžete začít ještě před osmnáctinami. Závěrečnou zkoušku skládáte, jakmile je vám 18 let.",
        ],
        list: [
          "Věk alespoň 18 let v den zkoušky",
          "Platná lékařská prohlídka (posudek o zdravotní způsobilosti)",
          "Žádný zákaz řízení ani 12 bodů v bodovém systému",
          "Bydliště v ČR nebo studium v ČR alespoň 6 měsíců",
          "Absolvovaný výcvik a úspěšná závěrečná zkouška",
        ],
      },
    ],
    faqIds: ["zacatek", "doklady", "delka", "platba", "zkouska-format", "neuspech"],
  },
  {
    slug: "jizdy-do-prahy",
    name: "Jízdy do Prahy",
    short: "Jízdy do Prahy",
    pitch: "Velkoměsto, tramvaje a víceproudé křižovatky. S námi bez paniky.",
    seoTitle: "Výcvikové jízdy v Praze",
    seoDescription:
      "Jako jediná autoškola v Rakovníku jezdíme s žáky i do Prahy. Jízda do Prahy je součástí každého kurzu sk. B, kondiční jízdy v Praze za 750 Kč.",
    lead:
      "Chceme z vás udělat řidiče, který se nezalekne ani velkoměsta. Proto s vámi vyrazíme do Prahy s lektorem, který je tam jako doma.",
    price: 750,
    priceNote: "kondiční jízda 45 min, v kurzu sk. B zdarma",
    image: "/images/jizda-praha.webp",
    imageAlt: "Výcviková jízda pražskou ulicí s Národním muzeem v pozadí",
    highlights: [
      "Součást každého kurzu sk. B",
      "Tramvaje, jízdní pruhy, kruhové objezdy",
      "Lektor, který Prahu zná",
      "I pro řidiče, kteří už řidičák mají",
    ],
    body: [
      {
        heading: "Proč jezdíme do Prahy",
        text: [
          "Zkušební okruh v Rakovníku vás na hustý provoz, tramvaje a víceproudé křižovatky nepřipraví. Praha ano. Jízdu do hlavního města proto zařazujeme do každého kurzu skupiny B.",
          "Zjistíte, že se není čeho bát a že se Praze nemusíte vyhýbat širokým obloukem.",
        ],
      },
      {
        heading: "Už máte řidičák, ale Prahy se bojíte?",
        text: [
          "Objednejte si kondiční jízdu do Prahy. Lekce trvá 45 minut a projedeme přesně ty situace, které vás stresují.",
        ],
      },
    ],
    faqIds: ["praha", "kondicni-pocet"],
  },
  {
    slug: "kurz-parkovani",
    name: "Kurz parkování",
    short: "Kurz parkování",
    pitch: "Pět lekcí, po kterých vás žádné parkovací místo nerozhodí.",
    seoTitle: "Kurz parkování Rakovník",
    seoDescription:
      "Kurz parkování v Rakovníku: 5 lekcí po 45 minutách za 3 600 Kč. Podélné, kolmé i šikmé parkování, garáže, obchodní centra i úzké ulice.",
    lead:
      "Potíte se už při pomyšlení na parkování? Zbavíme vás té fobie. Parkování bude vaše nové hobby.",
    price: 3600,
    priceNote: "5 lekcí po 45 minutách",
    image: "/images/kurz-parkovani.webp",
    imageAlt: "Podzemní parkovací garáž, kde trénujeme parkování",
    highlights: [
      "5 lekcí po 45 minutách",
      "Podélné, kolmé i šikmé stání",
      "Podzemní garáže a obchodní centra",
      "Úzké a frekventované ulice",
    ],
    body: [
      {
        heading: "Kde budeme trénovat",
        text: [
          "Tam, kde vás to opravdu trápí. U obchodních center, v podzemních garážích, v úzkých prostorách a na frekventovaných místech.",
          "Kurz je pro každého, kdo už řidičák má, ale parkování ho stresuje. Po pěti lekcích vás žádné místo nevyvede z míry.",
        ],
      },
    ],
    faqIds: ["parkovani-pro-koho"],
  },
  {
    slug: "kondicni-jizdy",
    name: "Kondiční jízdy",
    short: "Kondiční jízdy",
    pitch: "Po letech zpátky za volant. Klidně a vlastním tempem.",
    seoTitle: "Kondiční jízdy Rakovník",
    seoDescription:
      "Kondiční jízdy v Rakovníku i v Praze. Lekce 45 minut za 750 Kč. Pro řidiče, kteří dlouho neřídili nebo si nejsou jistí ve větším městě.",
    lead:
      "Dlouho jste neřídili a provoz mezitím zhoustl? Máte novou práci nebo jste se přestěhovali a bez auta to nejde? Společně to napravíme.",
    price: 750,
    priceNote: "za lekci 45 minut, doporučujeme alespoň 3",
    image: "/images/kondicni-jizdy.webp",
    imageAlt: "Řidič se soustředí za volantem při kondiční jízdě",
    highlights: [
      "Lekce 45 minut",
      "Doporučujeme alespoň 3 lekce",
      "Rakovník, okres i Praha",
      "Náplň podle vašich potřeb",
    ],
    body: [
      {
        heading: "Jak kondiční jízdy probíhají",
        text: [
          "Na první lekci zjistíme, kde se cítíte jistě a co vás stresuje. Podle toho naplánujeme další jízdy: město, okresní silnice, dálnice, parkování nebo Praha.",
          "Získáte zpět své dovednosti a řízení vás zase bude bavit.",
        ],
      },
    ],
    faqIds: ["kondicni-pocet", "praha"],
  },
  {
    slug: "skoleni-ridicu",
    name: "Školení řidičů referentů",
    short: "Školení řidičů",
    pitch: "Povinné školení pro zaměstnance, kteří řídí služebně.",
    seoTitle: "Školení řidičů referentů",
    seoDescription:
      "Školení řidičů referentů sk. B za 500 Kč. Povinnost zaměstnavatele podle zákoníku práce. Silniční zákon, dopravní nehoda, první pomoc, bodový systém.",
    lead:
      "Firmy, jejichž zaměstnanci řídí služební nebo soukromé vozidlo pro práci, jim musí zajistit školení řidičů referentských vozidel do 3,5 t.",
    price: 500,
    priceNote: "za osobu, sk. B",
    image: "/images/ucebna-autoskola-top-rakovnik.webp",
    imageAlt: "Učebna Autoškoly TOP s velkou obrazovkou a školicím stolem",
    highlights: [
      "Povinnost dle zákona č. 262/2006 Sb.",
      "Doporučujeme opakovat jednou ročně",
      "Pro firmy i jednotlivce",
      "Potvrzení o absolvování",
    ],
    body: [
      {
        heading: "Proč je školení povinné",
        text: [
          "Povinnost vyplývá ze zákoníku práce (zákon č. 262/2006 Sb.). Pokud ji zaměstnavatel nesplní, hrozí mu pokuta až 2 miliony korun. Školení se má provádět pravidelně, proto doporučujeme opakovat ho jednou ročně.",
        ],
      },
      {
        heading: "Co se na školení dozvíte",
        text: [],
        list: [
          "Silniční zákon a jeho aktuální změny",
          "Postup při dopravní nehodě",
          "Vyhláška o zdravotní způsobilosti",
          "Zásady první pomoci",
          "Dopravní přestupky a bodový systém",
        ],
      },
    ],
    faqIds: ["skoleni-firmy"],
  },
  {
    slug: "vraceni-ridicskeho-prukazu",
    name: "Vrácení řidičského průkazu",
    short: "Vrácení ŘP",
    pitch: "Přezkoušení odborné způsobilosti, abyste mohli zase řídit.",
    seoTitle: "Vrácení řidičského průkazu, přezkoušení",
    seoDescription:
      "Přezkoušení z odborné způsobilosti pro vrácení řidičského průkazu v Rakovníku. 2 cvičné jízdy, neomezená teorie a první zkouška v ceně 5 900 Kč.",
    lead:
      "Ať už jste o řidičák přišli jakkoli, pomůžeme vám ho získat zpátky. Připravíme vás na přezkoušení z odborné způsobilosti.",
    price: 5900,
    priceNote: "2 jízdy po 45 minutách a individuální konzultace",
    image: "/images/vraceni-ridicskeho-prukazu.webp",
    imageAlt: "Usměvavá řidička ukazuje vrácený řidičský průkaz z okna auta",
    highlights: [
      "Neomezená teorie a přednášky",
      "2 cvičné jízdy v ceně",
      "První zkouška v ceně",
      "Dva opravné pokusy",
    ],
    body: [
      {
        heading: "Co je v ceně",
        text: [
          "Cena obsahuje neomezené množství teoretických hodin a přednášek, dvě cvičné jízdy a první zkoušku. Správní poplatek hradíte sami.",
          "U přezkoušení máte dva opravné pokusy. Pokud neuspějete ani napodruhé, je nutné začít novou výuku a výcvik.",
        ],
      },
      {
        heading: "Doklady k přezkoušení",
        text: [],
        list: [
          "Doklad o zdravotní způsobilosti",
          "Dopravně psychologické vyšetření",
          "Výpis z karty řidiče, případně rozsudek či rozhodnutí o zákazu činnosti",
          "Doklad o přezkoušení vydáme my po úspěšné zkoušce",
        ],
      },
    ],
    faqIds: ["vraceni-doklady"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Plan = {
  id: string;
  name: string;
  price: number;
  duration: string;
  frequency: string;
  badge?: string;
  featured?: boolean;
  forWho: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "standard",
    name: "Standard",
    price: 19900,
    duration: "2-3 měsíce",
    frequency: "jízdy 2x týdně",
    forWho: "Pro každého, kdo nespěchá.",
    features: ["Zkouška nanečisto", "Jízda do Prahy během kurzu", "První závěrečná zkouška v ceně"],
  },
  {
    id: "student",
    name: "Student",
    price: 18500,
    duration: "2-3 měsíce",
    frequency: "jízdy 2x týdně",
    badge: "Nejvýhodnější",
    featured: true,
    forWho: "Se slevou po předložení potvrzení o studiu.",
    features: ["Zkouška nanečisto", "Jízda do Prahy během kurzu", "První závěrečná zkouška v ceně"],
  },
  {
    id: "expres",
    name: "Expres",
    price: 22900,
    duration: "1-1,5 měsíce",
    frequency: "jízdy až 5x týdně",
    forWho: "Když potřebujete řidičák rychle.",
    features: ["Zkouška nanečisto", "Jízda do Prahy během kurzu", "První závěrečná zkouška v ceně"],
  },
  {
    id: "vip",
    name: "VIP",
    price: 25900,
    duration: "1-1,5 měsíce",
    frequency: "jízdy až 5x týdně",
    badge: "Maximální flexibilita",
    forWho: "Jízdy ráno, večer i o víkendu.",
    features: [
      "Vše jako Expres",
      "Flexibilní plánování jízd",
      "Ranní, večerní i víkendové jízdy",
      "Nástup a výstup kde potřebujete",
    ],
  },
];

export const fees = [
  { label: "Jízdy o víkendech, ráno nebo večer (příplatek ke kurzu)", price: 2000 },
  { label: "Nedostavení se na výuku nebo výcvik bez omluvy", price: 500, note: "omluvte se alespoň 8 hodin předem" },
  { label: "Nedostavení se ke státní zkoušce", price: 1000 },
];

export type Faq = { id: string; q: string; a: string; category: FaqCategory };
export type FaqCategory = "Začínáme" | "Kurz a jízdy" | "Platba" | "Zkouška" | "Další služby";

export const faqCategories: FaqCategory[] = ["Začínáme", "Kurz a jízdy", "Platba", "Zkouška", "Další služby"];

export const faqs: Faq[] = [
  {
    id: "zacatek",
    category: "Začínáme",
    q: "Kdy můžu s kurzem začít?",
    a: "Kurz můžete začít ještě před osmnáctinami, závěrečnou zkoušku pak složíte, jakmile vám bude 18 let. Zavolejte nám a domluvíme termín nástupu tak, aby vám to časově vyšlo.",
  },
  {
    id: "doklady",
    category: "Začínáme",
    q: "Co potřebuju k přihlášení?",
    a: "Vyplněnou žádost o přijetí k výuce a výcviku a posudek o zdravotní způsobilosti od praktického lékaře. Žádost vám rádi předáme nebo pošleme e-mailem.",
  },
  {
    id: "kde",
    category: "Začínáme",
    q: "Kde vás najdu?",
    a: "Učebnu a kancelář máme na adrese Ottova 418 v Rakovníku, v budově Raportu naproti Rakoně ve 2. patře. Přijďte po předchozí telefonické domluvě.",
  },
  {
    id: "delka",
    category: "Kurz a jízdy",
    q: "Jak dlouho kurz trvá?",
    a: "Standard a Student trvají 2 až 3 měsíce s jízdami 2x týdně. Expres a VIP zvládnete za 1 až 1,5 měsíce s jízdami až 5x týdně. Kurz obsahuje 28 hodin praktických jízd.",
  },
  {
    id: "auto",
    category: "Kurz a jízdy",
    q: "V jakém autě budu jezdit?",
    a: "V našem oranžovém Renaultu Captur s klimatizací. Je pohodlný, dobře se v něm parkuje a v Rakovníku ho snadno poznáte.",
  },
  {
    id: "praha",
    category: "Kurz a jízdy",
    q: "Opravdu pojedeme do Prahy?",
    a: "Ano. Jízda do Prahy je součástí každého kurzu sk. B. Hustý provoz, tramvaje i víceproudé křižovatky si vyzkoušíte s lektorem, který Prahu zná.",
  },
  {
    id: "omluva",
    category: "Kurz a jízdy",
    q: "Co když se na jízdu nemůžu dostavit?",
    a: "Omluvte se prosím alespoň 8 hodin předem, pak je vše v pořádku. Nedostavení bez omluvy stojí 500 Kč, nedostavení ke státní zkoušce 1 000 Kč.",
  },
  {
    id: "platba",
    category: "Platba",
    q: "Jak probíhá platba?",
    a: "Platíte ve dvou splátkách bez navýšení. Minimální záloha je 10 000 Kč při nástupu, doplatek nejpozději 14 dní před ukončením kurzu.",
  },
  {
    id: "cena-obsahuje",
    category: "Platba",
    q: "Co cena kurzu obsahuje?",
    a: "Kompletní výuku a výcvik včetně zkoušky nanečisto, jízdy do Prahy a první závěrečné zkoušky. Cena je konečná, nezahrnuje jen správní poplatek za zkoušku, který se platí úřadu.",
  },
  {
    id: "kamarad",
    category: "Platba",
    q: "Jak funguje bonus za kamaráda?",
    a: "Za každého kamaráda, kterého přivedete a který si u nás koupí kurz, získáte 500 Kč. Počet kamarádů není omezený. Přiveďte celou třídu a můžete mít řidičák zdarma.",
  },
  {
    id: "zkouska-format",
    category: "Zkouška",
    q: "Jak vypadá závěrečná zkouška?",
    a: "Skládá se z testu z pravidel a zdravotnické přípravy a z praktické jízdy. Test má 25 otázek, maximum je 50 bodů a uspějete se ziskem alespoň 43 bodů. Zkoušku vede komisař z úřadu.",
  },
  {
    id: "nanecisto",
    category: "Zkouška",
    q: "K čemu je zkouška nanečisto?",
    a: "Projdete si celou zkoušku v klidu a bez stresu, ještě než vás čeká ta ostrá. Uvidíte, jak probíhá, a víme, co ještě doladit.",
  },
  {
    id: "neuspech",
    category: "Zkouška",
    q: "Co když u zkoušky neuspěju?",
    a: "Nic se neděje, stává se to. Opravnou zkoušku domluvíme co nejdřív a před ní s vámi projdeme, co nevyšlo. Kolik bude stát případná jízda navíc, víte vždy předem.",
  },
  {
    id: "kondicni-pocet",
    category: "Další služby",
    q: "Kolik kondičních jízd potřebuju?",
    a: "Doporučujeme alespoň 3 lekce po 45 minutách. Po první jízdě vám řekneme, kolik jich podle nás opravdu potřebujete.",
  },
  {
    id: "parkovani-pro-koho",
    category: "Další služby",
    q: "Pro koho je kurz parkování?",
    a: "Pro každého, kdo už řidičák má, ale parkování ho stresuje. Kurz má 5 lekcí po 45 minutách a stojí 3 600 Kč.",
  },
  {
    id: "skoleni-firmy",
    category: "Další služby",
    q: "Školíte i celé firmy?",
    a: "Ano. Školení řidičů referentů děláme pro firmy i jednotlivce. Napište nám počet lidí a domluvíme termín.",
  },
  {
    id: "vraceni-doklady",
    category: "Další služby",
    q: "Co potřebuju k vrácení řidičáku?",
    a: "Doklad o zdravotní způsobilosti, dopravně psychologické vyšetření a výpis z karty řidiče, případně rozhodnutí o zákazu činnosti. Doklad o přezkoušení vám vystavíme my.",
  },
];

export function getFaqs(ids: string[]) {
  return ids.map((id) => faqs.find((f) => f.id === id)).filter((f): f is Faq => Boolean(f));
}

export const steps = [
  {
    title: "Ozvěte se nám",
    text: "Zavolejte nebo vyplňte formulář. Domluvíme variantu kurzu a termín nástupu.",
  },
  {
    title: "Lékař a žádost",
    text: "Praktický lékař vám potvrdí zdravotní způsobilost na žádost o přijetí do výcviku.",
  },
  {
    title: "Teorie v učebně",
    text: "Pravidla provozu, zdravotní příprava a testy nanečisto v naší učebně v Rakovníku.",
  },
  {
    title: "Jízdy s instruktorem",
    text: "28 hodin jízd v Rakovníku, po okrese i v Praze. Dál jdeme, až když si jste jistí.",
  },
  {
    title: "Zkouška nanečisto",
    text: "Vyzkoušíte si celou zkoušku v klidu, ještě než přijde ta ostrá.",
  },
  {
    title: "Závěrečná zkouška",
    text: "Test a jízda s komisařem. První pokus máte v ceně kurzu.",
  },
];

export const reasons = [
  {
    title: "Klid, žádný křik",
    text: "Tempo přizpůsobíme vám. Dál jdeme, až když danou věc máte opravdu zažitou.",
  },
  {
    title: "Praha v každém kurzu",
    text: "Jako jediní v Rakovníku s vámi vyrazíme i do pražského provozu.",
  },
  {
    title: "Vůz s klimatizací",
    text: "Jezdíte v pohodlném oranžovém Renaultu Captur, který v Rakovníku každý zná.",
  },
  {
    title: "Řidičák zadarmo?",
    text: "Za každého kamaráda, který si u nás koupí kurz, dostanete 500 Kč.",
  },
];
