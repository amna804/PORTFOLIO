import "./globals.css";
import Header from "./componenets/Header";

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
    <html lang="en">
      <body>
        <Header />  {/* Navbar */}
        {children}
      </body>
    </html>
  );
}
