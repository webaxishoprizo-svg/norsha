import { Link } from "wouter";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Norsha Logo" 
                  className="w-6 h-6 object-contain brightness-0 invert" 
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Norsha
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              Empowering the future through innovation. We build, grow, and scale technology companies that transform industries.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Companies</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://nexusq.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  NexusQ <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                </a>
              </li>
              <li>
                <a href="https://flowlith.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  Flowlith <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                </a>
              </li>
              <li>
                <a href="https://nakmedia.co" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  NakMedia <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">123 Innovation Drive<br/>Tech Park, TP 45678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@norsha.com" className="text-sm text-slate-400 hover:text-white transition-colors">hello@norsha.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-slate-400 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Norsha Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
