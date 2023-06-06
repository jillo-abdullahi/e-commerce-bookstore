import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbh_Sans = Kumbh_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "J.K. Rowling Books",
  description: "A bookstore for select J.K. Rowling titles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh_Sans.className}>{children}</body>
    </html>
  );
}
