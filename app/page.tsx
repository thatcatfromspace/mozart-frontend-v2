import Image from "next/image";
import {
  Playfair_Display,
  Dynalight,
  Zeyada,
  Satisfy,
  Comforter_Brush,
  DM_Sans,
} from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

const dynalight = Dynalight({
  subsets: ["latin"],
  weight: "400",
});

const zeyada = Zeyada({
  subsets: ["latin"],
  weight: ["400"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const comforterBrush = Comforter_Brush({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const fancyText = [
    "exquisite",
    "immaculate",
    "impeccable",
    "unique",
    "authentic",
    "expressive",
    "versatile",
    "tantalizing",
    "regal",
    "unrivaled",
    "ethereal",
    "opulent",
    "exceptional",
    "mesmeric",
    "classy",
  ];

  const fancyFonts = [dynalight, zeyada, satisfy, comforterBrush];

  return (
    <div
      className={`${sans.className} flex min-h-screen flex-col bg-aliceblue-400 p-5 text-black`}
    >
      <nav className="flex justify-between lg:px-10">
        <div className={`${playfair.className} text-3xl`}>MOZART.</div>
        <div className="flex">
          <span className={`me-10 cursor-pointer hover:underline hidden sm:flex`}>
            How it works
          </span>
            <button
              className={`rounded-full bg-gunmetal-200 px-4 py-1 text-aliceblue-700 transition-colors hover:bg-gunmetal-200/70`}
            >
              Coming soon
            </button>
        </div>
      </nav>
      <main className="mt-5 flex flex-1 items-center justify-center min-h-full md:space-x-32">
        <div className="flex flex-col">
          <span className={`${playfair.className} text-5xl font-medium`}>
            Your taste is
          </span>
          <span
            className={`${
              fancyFonts[Math.floor(Math.random() * fancyFonts.length)]
                .className
            } mt-2 text-6xl`}
          >
            {fancyText[Math.floor(Math.random() * fancyText.length)]}.
          </span>
          <span className="group mt-3 flex items-center font-medium">
            Let the world know about it.&nbsp;
              {/*<span className="transition-transform hover:underline">*/}
              {/*  Coming soon!*/}
              {/*</span>*/}
            {/*<ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />*/}
          </span>
        </div>
        <div>
          <Image
            src="/mozart-girl.png"
            alt="mozart girl"
            height={350}
            width={350}
            className="hidden sm:flex"
          />
        </div>
      </main>
    </div>
  );
}
