import Link from "next/link";
import Image from "next/image";
import ThemeProvider from "./ThemeProvider"; // Import Theme Toggle

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      {/* Left Side - MLSA Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/images/MLSA-removebg-preview.png" alt="MLSA Logo" width={40} height={40} />
        <span className="text-lg font-bold">MLSA_Youth Empowerment</span>
      </div>

      {/* Middle Links */}
      <ul className="flex space-x-6 text-sm">
        <li><Link href="/"><span className="hover:text-blue-400 cursor-pointer">About</span></Link></li>
        <li><Link href="/uses"><span className="hover:text-blue-400 cursor-pointer">Uses</span></Link></li>
        <li><Link href="/case-studies"><span className="hover:text-blue-400 cursor-pointer">Case Studies</span></Link></li>
        <li><Link href="/blog"><span className="hover:text-blue-400 cursor-pointer">Blog</span></Link></li>
        <li><Link href="/contact"><span className="hover:text-blue-400 cursor-pointer">Contact</span></Link></li>
      </ul>

      {/* Right Side - Theme Toggle */}
      <ThemeProvider />
    </nav>
  );
};

export default Header;
