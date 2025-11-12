import { Mulish, DM_Serif_Display } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Load fonts
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const metadata = {
  title: "Trupp Global",
  description: "Customer support solutions powered by Trupp Global.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
