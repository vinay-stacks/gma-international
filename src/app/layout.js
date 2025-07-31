// 'use client'
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
// import WhatsAPP from "@/components/WhatsAPP";

export const metadata = {
  title: "GMA International School",
  description: "join us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <WhatsAPP /> */}
        <Header />
        {children}
        <Footer />
     
      </body>
    </html>
  );
}
