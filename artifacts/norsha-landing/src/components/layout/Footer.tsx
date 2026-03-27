import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-30 bg-[#0a0b14] text-white pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 group mb-6 inline-flex">
              <div
                className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/10"
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
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs font-medium">
              Building the future, one company at a time.
            </p>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-8 text-white">Our Companies</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://nexusq.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  NexusQ <ExternalLink className="w-3 h-3 text-[#2563EB] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://flowlith.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  Flowlith <ExternalLink className="w-3 h-3 text-[#2563EB] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://nakmedia.co" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  NakMedia <ExternalLink className="w-3 h-3 text-[#2563EB] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-8 text-white">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Our Story</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-8 text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400 leading-relaxed font-medium">
              <li>
                Door No:5/52 Kodibail,<br />
                Mangalpady Gram Panchayth,<br />
                Uppala, Kasargod- 671322,<br />
                Kerala, India
              </li>
              <li>
                <a href="mailto:norshaprivatelimited@gmail.com" className="hover:text-white transition-colors break-all">norshaprivatelimited@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © 2025 Norsha Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium whitespace-nowrap">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
