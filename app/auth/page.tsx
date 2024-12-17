import Image from "next/image";
import { DM_Sans } from "next/font/google";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Page() {
  return (
    <main
      className={`${sans.className} flex min-h-screen items-center justify-center bg-aliceblue-400 text-black lg:space-x-32 lg:px-10`}
    >
      <div className="max-w-1/4 flex flex-col p-4 sm:w-1/4">
        <span>
          To begin tracking your data, Mozart needs access to your Spotify
          account. Upon clicking the button, you will be redirected to the
          Spotify authorization page.
        </span>
        <button className="mt-4 flex w-fit items-center space-x-2 rounded-lg bg-[#1DB954] px-4 py-2 text-sm text-white transition-all hover:shadow">
          <Image
            src="/spotify-white-icon.svg"
            alt="spotify icon"
            height={15}
            width={15}
          />
          <span>Sign in with Spotify</span>
        </button>
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
  );
}
