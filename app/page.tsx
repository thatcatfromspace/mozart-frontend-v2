import Image from "next/image";
import Link from "next/link";
import {
  Playfair_Display,
  Dynalight,
  Zeyada,
  Satisfy,
  Comforter_Brush,
  DM_Sans,
} from "next/font/google";
import { ArrowUpRight } from "lucide-react";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

export const dynalight = Dynalight({
  subsets: ["latin"],
  weight: "400",
});

export const zeyada = Zeyada({
  subsets: ["latin"],
  weight: ["400"],
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

export const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const comforterBrush = Comforter_Brush({
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
        <div>
          <span className={`me-10 cursor-pointer hover:underline`}>
            How it works
          </span>
          <Link href={"/auth"}>
            <button
              className={`rounded-full bg-gunmetal-200 px-5 py-1 text-aliceblue-700 transition-colors hover:bg-gunmetal-200/70`}
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
      <main className="mt-5 flex items-center justify-center md:mt-36 lg:gap-x-32">
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
            <Link href={"/auth"}>
              <span className="transition-transform hover:underline">
                Try Mozart
              </span>
            </Link>
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
        <div>
          <Image
            src="/mozart-girl.png"
            alt="mozart girl"
            height={350}
            width={350}
          />
        </div>
      </main>
    </div>
  );
}
