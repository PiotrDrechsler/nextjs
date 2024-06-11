import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Hello Next!",
  description: "Pierwsza apka w next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
