import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import { Providers } from "@/redux/provider";

const kumbh_Sans = Kumbh_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Tomes Without Scolls",
  description: "A bookstore for select J.K. Rowling titles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh_Sans.className}>
        <Providers>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <NavBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
