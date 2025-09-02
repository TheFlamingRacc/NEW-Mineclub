import { Geist, Geist_Mono, Inter, Manrope, Kanit } from "next/font/google";
import "./globals.css";
import CustomToastContainer from "./toasts/CustomToastContainer";
import { NavigationMainProvider } from "./context/NavigationMainContext";
import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import QueryProvider from "./providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // які потрібно
  variable: "--font-inter",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // які потрібно
  variable: "--font-kanit",
});

const manrope = Manrope({
  subsets: ["latin"], // обов’язково: можна також 'cyrillic' для укр
  weight: ["400", "700", "800"], // потрібні ваги шрифту (звичайний, жирний тощо)
  display: "swap", // рекомендується для покращення UX
  variable: "--font-manrope",
});

export const metadata = {
  title: "Mineclub",
  description: "aboba",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} ${kanit.variable}`}
      >
        <AppRouterCacheProvider>
          <QueryProvider>
            <NavigationMainProvider>{children}</NavigationMainProvider>
            <CustomToastContainer />
          </QueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
