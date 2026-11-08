
import type { ImageMetadata } from "astro";

import image1919 from "../../public/images/timeline/1919.jpg";
import image1922 from "../../public/images/timeline/1922.jpg";
import image1939 from "../../public/images/timeline/1939.jpg";
import image1945 from "../../public/images/timeline/1945.jpg";

export type Lang = "sk" | "en";

type TranslatedText = Record<Lang, string>;

export interface TimelineEvent {
    year: string;
    image: ImageMetadata;
    date: TranslatedText;
    title: TranslatedText;
    description: TranslatedText;
    detail: TranslatedText;
}

export const timelineContent = {
    eyebrow: {
        sk: "02 / ČASOVÁ OS",
        en: "02 / TIMELINE",
    },
    title: {
        sk: "Život v historických míľnikoch.",
        en: "A life in moments.",
    },
    subtitle: {
        sk: "Životná cesta Michala Strenka, od slovenských koreňov až po bojiská Tichomoria.",
        en: "The journey of Michael Strank, from his Slovak roots to the battlefields of the Pacific.",
    },
} satisfies Record<"eyebrow" | "title" | "subtitle", TranslatedText>;

export const timelineEvents = [
    {
        year: "1919",
        image: image1919,
        date: {
            sk: "10. november 1919",
            en: "10 November 1919",
        },
        title: {
            sk: "Korene na Slovensku",
            en: "Roots in Slovakia",
        },
        description: {
            sk: "Michal Strenk sa narodil v Jarabine na území dnešného Slovenska rodičom Vasiľovi a Marte Strenkovcom. Jeho detstvo sa začalo v regióne, kde mnohé rodiny zápasili s náročnými hospodárskymi podmienkami a odchádzali za lepším životom do zahraničia.",
            en: "Michal Strenk was born in Jarabina, in present-day Slovakia, to Vasil and Marta Strenk. His childhood began in a region where many families faced economic hardship and considered emigration in search of better opportunities.",
        },
        detail: {
            sk: "Jeho slovenský pôvod zostal dôležitou súčasťou životného príbehu, hoci väčšinu života prežil v Amerike.",
            en: "His Slovak roots would remain an important part of his story, even though he spent most of his life in America.",
        },
    },
    {
        year: "1922",
        image: image1922,
        date: {
            sk: "1922 · Vysťahovalectvo",
            en: "1922 · Emigration",
        },
        title: {
            sk: "Nový domov v Amerike",
            en: "A new home in America",
        },
        description: {
            sk: "Ako malé dieťa prišiel Michal so svojou matkou do Spojených štátov, kde sa pripojili k otcovi, ktorý odišiel za prácou už skôr. Rodina sa usadila v oblasti Franklin Borough v Pensylvánii, neďaleko mesta Johnstown.",
            en: "As a young child, Michal arrived in the United States with his mother, joining his father, who had travelled there earlier to find work. The family settled in the Franklin Borough area of Pennsylvania, near Johnstown.",
        },
        detail: {
            sk: "Navštevoval miestne školy a v roku 1937 ukončil strednú školu. Následne približne 18 mesiacov pôsobil v programe Civilian Conservation Corps a pracoval pri výstavbe a údržbe ciest v Pensylvánii.",
            en: "He attended local schools and graduated from high school in 1937. He later spent approximately 18 months in the Civilian Conservation Corps and worked on Pennsylvania roads.",
        },
    },
    {
        year: "1939",
        image: image1939,
        date: {
            sk: "6. október 1939",
            en: "6 October 1939",
        },
        title: {
            sk: "Cesta amerického mariňáka",
            en: "The path of a Marine",
        },
        description: {
            sk: "Michael Strank vstúpil v Pittsburghu do Zboru námornej pechoty USA. Základný výcvik absolvoval na základni Parris Island v Južnej Karolíne a začal vojenskú kariéru, ktorá ho neskôr zaviedla ďaleko za hranice Spojených štátov.",
            en: "Michael Strank enlisted in the United States Marine Corps in Pittsburgh. He completed recruit training at Parris Island, South Carolina, and began a military career that would take him far beyond the United States.",
        },
        detail: {
            sk: "Slúžil na Kube aj na amerických základniach. V januári 1942 bol povýšený na seržanta a neskôr pôsobil v jednotkách Marine Raiders v Tichomorí, vrátane operácií spojených s ostrovom Bougainville.",
            en: "He served in Cuba and at American bases, was promoted to sergeant in January 1942, and later served with Marine Raider units in the Pacific, including operations associated with Bougainville.",
        },
    },
    {
        year: "1945",
        image: image1945,
        date: {
            sk: "19. február – 1. marec 1945",
            en: "19 February – 1 March 1945",
        },
        title: {
            sk: "Iwodžima a posledná obeta",
            en: "Iwo Jima and the final sacrifice",
        },
        description: {
            sk: "Dňa 19. februára 1945 sa Strenk vylodil na Iwodžime s 5. divíziou námornej pechoty. O štyri dni neskôr, 23. februára, sa zúčastnil druhého vztýčenia americkej vlajky na hore Suribači. Fotograf Joe Rosenthal zachytil okamih na snímke, ktorá sa preslávila po celom svete.",
            en: "On 19 February 1945, Strank landed on Iwo Jima with the 5th Marine Division. Four days later, on 23 February, he participated in the second raising of the American flag on Mount Suribachi. Photographer Joe Rosenthal captured the moment in an image that became famous around the world.",
        },
        detail: {
            sk: "Po vztýčení vlajky sa Strenk vrátil do boja. Dňa 1. marca 1945 vo veku 25 rokov zahynul pri delostreleckej paľbe, zatiaľ čo boje na ostrove pokračovali. Neskôr bol pochovaný na Arlingtonskom národnom cintoríne.",
            en: "Strank returned to combat after the flag raising. On 1 March 1945, at the age of 25, he was killed by artillery fire while the battle continued. He was later laid to rest at Arlington National Cemetery.",
        },
    },
] satisfies TimelineEvent[];
