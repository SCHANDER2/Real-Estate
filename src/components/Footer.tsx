import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#061d36] text-white border-t border-[#0d2e52]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1.1fr_1.1fr_1.2fr]">
        {/* About & Trust */}
        <div>
          <div className="mb-4 font-display text-3xl font-bold">
            <span className="text-gold">Choudhary</span> Property
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Your local partner for transparent property decisions in and around Bhadra. We assist with verified residential plots, agricultural land, and ready-to-move houses.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#edc66a]">
            ✓ Local & Trustworthy
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Quick Navigation</h3>
          <div className="space-y-3 text-sm text-white/60">
            <Link className="block hover:text-gold transition-colors" href="/properties">
              Browse Properties
            </Link>
            <Link className="block hover:text-gold transition-colors" href="/contact">
              Sell With Us
            </Link>
            <Link className="block hover:text-gold transition-colors" href="/contact">
              Contact Team
            </Link>
          </div>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Direct Contacts</h3>
          <div className="space-y-3 text-sm text-white/60">
            <a className="flex items-center gap-2 hover:text-gold transition-colors" href="tel:+917665074030">
              <Phone size={16} className="text-gold shrink-0" />
              <span>Sushil: +91 76650 74030</span>
            </a>
            <a className="flex items-center gap-2 hover:text-gold transition-colors" href="tel:+918005940709">
              <Phone size={16} className="text-gold shrink-0" />
              <span>Sachin: +91 80059 40709</span>
            </a>
            <a 
              className="flex items-center gap-2 hover:text-gold transition-colors text-emerald-400" 
              href="https://wa.me/917665074030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} className="text-emerald-400 shrink-0" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>

        {/* Office Location */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Office Location</h3>
          <div className="space-y-3 text-sm text-white/60">
            <p className="flex items-start gap-2 leading-relaxed">
              <MapPin size={17} className="text-gold shrink-0 mt-0.5" />
              <span>
                Near SBI Bank, Dabri Bhadra,<br />
                Hanumangarh, Rajasthan - 335503
              </span>
            </p>
            <p className="text-xs text-white/40 italic">
              Walk-in discussions are welcome.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-white/40">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Choudhary Property. All rights reserved.</p>
          <p className="text-[10px]">Transparent property advice in Dabri & Bhadra.</p>
        </div>
      </div>
    </footer>
  );
}
