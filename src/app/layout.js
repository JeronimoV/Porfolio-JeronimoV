import "./globals.css";
import NavBar from "@/Components/NavBar";
import Providers from "@/globalRedux/provider";
import Head from "next/head";

export const metadata = {
  title: "Porfolio",
  description: "Porfolio generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Noto+Sans&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
