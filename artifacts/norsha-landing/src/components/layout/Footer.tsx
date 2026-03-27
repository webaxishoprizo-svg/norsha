import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#080d1a] text-white pt-24 pb-8 overflow-hidden">
      {/* Subtle blue gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[#2563EB]/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div
                className="w-11 h-11 rounded-full overflow-hidden shrink-0"
                style={{
                  backgroundImage: "url('/norsha-logo.jpg')",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "left center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Norsha Pvt. Ltd.
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              Building the future, one company at a time.
            </p>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Companies</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://nexusq.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                  NexusQ <ExternalLink className="w-3 h-3 text-[#2563EB] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://flowlith.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                  Flowlith <ExternalLink className="w-3 h-3 text-[#2563EB] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://nakmedia.co" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                  NakMedia <ExternalLink className="w-3 h-3 text-[#2563EB] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Our Story</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Door No:5/52 Kodibail,</li>
              <li>Mangalpady Gram Panchayth, Uppala,</li>
              <li>Kasargod- 671322, Kerala</li>
              <li>
                <a href="mailto:norshaprivatelimited@gmail.com" className="hover:text-white transition-colors">norshaprivatelimited@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 Norsha Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
