import type { Metadata } from "next";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Hello Next!",
  description: "Pierwsza apka w next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
