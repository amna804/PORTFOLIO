import { Header } from "@/app/componenets/Header/Header";
import "./globals.css";


export const metadata = {
  title: "MLSA Portfolio",
  description: "Portfolio site for MLSA_YE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
    
      <Header />
        {children}
      </body>
    </html>
  );
}
