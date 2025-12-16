import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import CartProvider from "@/context/CartProvider";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: "Daily Dish",
    template: "%s  | Daily Dish",
  },
  description: "healthy food by Daily-dish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <CartProvider>
          <Navbar></Navbar>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
