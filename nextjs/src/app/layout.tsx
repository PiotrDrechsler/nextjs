import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello Next!",
  description: "Pierwsza apka w next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
