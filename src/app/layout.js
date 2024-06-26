import { Inter } from "next/font/google";
import "./globals.css";
import GlobalState from "../context";
import NavBar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce-app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <NavBar />
          <main className="flex min-h-screen flex-col mt-[80px]">{children}</main>
        </GlobalState>
      </body>
    </html>
  );
}
