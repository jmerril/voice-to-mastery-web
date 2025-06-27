
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Zyglio
            </h3>
            <p className="text-slate-400 mb-4">
              Voice. Structured. Mastered.
            </p>
            <p className="text-sm text-slate-500">
              © 2025 Zyglio, Inc. All Rights Reserved
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Patents Applied For
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/zyglio" className="text-slate-400 hover:text-white transition-colors">Zyglio Platform</Link></li>
              <li><Link to="/technology" className="text-slate-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries" className="text-slate-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/pharmaceutical" className="text-slate-400 hover:text-white transition-colors">Pharmaceutical</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/roi-calculator" className="text-slate-400 hover:text-white transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/demo" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Transforming human voice into the world's most powerful training asset.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
