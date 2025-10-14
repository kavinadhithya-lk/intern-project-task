import { Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-[#487C9A] px-4 md:px-8">
        <div className="max-w-[1404px] mx-auto">
          <div className="flex items-center justify-between h-[84px]">
            {/* Logo */}
            <Link to="/" className="text-white font-poppins text-[40px] font-medium leading-none">
              LOGO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              <Link to="/" className="text-white font-poppins text-sm font-medium hover:opacity-80 transition-opacity">
                Business Setup
              </Link>
              <button className="text-white font-poppins text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-80">
                  <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Link to="/about" className="text-white font-poppins text-sm font-medium hover:opacity-80 transition-opacity">
                About Us
              </Link>
              <Link to="/contact" className="text-white font-poppins text-sm font-medium hover:opacity-80 transition-opacity">
                Contact Us
              </Link>
              <button className="bg-[#FFC310] text-black font-poppins text-sm font-bold uppercase px-11 py-2.5 rounded-lg hover:bg-[#F0BA1A] transition-colors">
                Cost Calculator
              </button>
            </nav>

            {/* Language Selector & Menu */}
            <div className="flex items-center gap-6">
              <button className="hidden md:flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                <Globe className="w-6 h-6" />
                <span className="font-poppins text-sm font-medium">ENG</span>
              </button>
              
              <button className="lg:hidden text-white hover:opacity-80 transition-opacity">
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
