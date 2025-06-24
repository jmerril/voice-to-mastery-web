
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Zyglio Platform", path: "/zyglio" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Industries", path: "/industries" },
    { name: "Technology", path: "/technology" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" }
  ];
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c0b7a398-4134-47e4-aa82-de5bf47aa45b.png" 
                alt="Zyglio" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/demo">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Demo
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-2 py-1 rounded transition-colors hover:text-blue-600 ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/demo" onClick={() => setIsOpen(false)}>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Get Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
