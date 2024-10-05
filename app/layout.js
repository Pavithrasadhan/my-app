
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "./head";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Pavithra Sadhan",
  description: "This app is all about me",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
 <Link href="/" className="">
      <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>Pavithra</h1></Link>      
      <Link href="/about" className="">
        <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>About Me</h1>
      </Link>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500 ${fugaz.className}`}>
        Built by Pavithra Sadhan💛
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${opensans.className}`}
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/R.be68fb3cc01a89feee23b2d2c1aff986?rik=2m9%2fhSoTQqDA3w&riu=http%3a%2f%2fimages.designtrends.com%2fwp-content%2fuploads%2f2015%2f11%2f17061911%2fLight-Purple-Backgrounds.jpg&ehk=u66DSt8%2bnuNR%2burF5m%2bPyAxdGh9yGk%2fpkG6uIgvce7Q%3d&risl=&pid=ImgRaw&r=0')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
