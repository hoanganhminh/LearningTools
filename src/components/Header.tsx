import { useState } from "react";
import { Menu, X } from "lucide-react"; // Sử dụng icon lucide-react

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-300 to-brand-500 flex items-center justify-center text-white font-bold shadow">
            AWS
          </div>
          <div>
            <h1 className="text-lg font-semibold">AWS Quiz Studio</h1>
            <p className="text-sm text-slate-500">Học và kiểm tra bank đề AWS</p>
          </div>
        </div>

        {/* Navigation - desktop */}
        <nav className="hidden md:flex text-sm text-slate-600">
          <span className="mr-4 hover:text-brand-500 cursor-pointer">Preview</span>
          <span className="mr-4 hover:text-brand-500 cursor-pointer">Study</span>
          <span className="font-medium hover:text-brand-500 cursor-pointer">Quiz</span>
        </nav>

        {/* Hamburger menu - mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 text-sm text-slate-600">
          <div className="py-2 hover:text-brand-500 cursor-pointer">Preview</div>
          <div className="py-2 hover:text-brand-500 cursor-pointer">Study</div>
          <div className="py-2 font-medium hover:text-brand-500 cursor-pointer">Quiz</div>
        </div>
      )}
    </header>
  );
}
