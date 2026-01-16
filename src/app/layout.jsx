import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default:"Foodie.",
    template: "%s | Foodie."
  },
  description: "Best Fast Food In Dhaka,Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <footer>
            <Footer/>
        </footer>
      </body>
    </html>
  );
}
