import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  BadgeCheck, 
  Building2, 
  Handshake, 
  House, 
  Landmark, 
  MapPin, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Star, 
  UsersRound, 
  Search,
  CheckCircle2,
  Map
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const services = [
  {
    Icon: House,
    title: "Residential Plots & Land",
    text: "Find verified residential plots and land parcels near Dabri Road and expanding sectors of Bhadra."
  },
  {
    Icon: Landmark,
    title: "Sell Local Properties",
    text: "Position your plots, houses, or retail spaces to reach serious, verified buyers in the Hanumangarh district."
  },
  {
    Icon: Building2,
    title: "Rental & Commercial Shops",
    text: "Locate high-visibility commercial shops, office units, or rental houses close to markets."
  },
  {
    Icon: Handshake,
    title: "Document & Registry Guide",
    text: "Get clear advice on registry verification, mutations, boundary checks, and actual market valuation."
  }
];

const trustFactors = [
  {
    Icon: ShieldCheck,
    title: "Document Checks First",
    text: "We assist in checking land mutation papers, registry records, and ownership logs before any token exchange."
  },
  {
    Icon: MapPin,
    title: "Bhadra Market Experience",
    text: "Our team lives and operates locally. We know the actual price trends, local road widths, and layout approvals."
  },
  {
    Icon: BadgeCheck,
    title: "Straightforward Deals",
    text: "No artificial price hikes, hidden commissions, or double-talk. We focus on fair value for buyers and sellers."
  },
  {
    Icon: UsersRound,
    title: "Face-to-Face Meetings",
    text: "We bring the buyer and seller together directly so that all payment terms and timelines are discussed upfront."
  }
];

const recentDeals = [
  { detail: "1,800 sq ft Residential Plot on Dabri Road", status: "Registry completed & title transferred" },
  { detail: "Commercial Shop unit in Main Market Bhadra", status: "Lease agreement signed directly" },
  { detail: "3 BHK Family House near Govt Girls School", status: "Sold to a local buyer within 3 weeks" },
  { detail: "5 Bigha Agricultural Land parcel near Dabri", status: "Boundary demarcated & ownership updated" }
];

const localAreas = [
  "Dabri", "Dabri Road", "Hanumangarh Road", "Main Market Bhadra", "Bypass Road", "SBI Bank Sector"
];

export default function Home() {
  const featured = properties.filter(p => p.featured);

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[700px] overflow-hidden bg-navy text-white">
          <Image 
            src="/images/hero-estate.png" 
            alt="Local property plots and houses in Bhadra" 
            fill 
            priority 
            className="object-cover object-[70%] opacity-30 pointer-events-none"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-35 pointer-events-none"
          >
            <source src="/real-estate-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d36]/95 via-[#061d36]/80 to-[#061d36]/25" />
          <Navbar />
          
          <div className="container-page relative flex min-h-[700px] items-center pt-24 pb-16">
            <div className="max-w-2xl">
              <span className="inline-block rounded bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#edc66a] border border-gold/20">
                LOCAL REAL ESTATE ADVISORS IN BHADRA
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.12] sm:text-5xl lg:text-6xl font-bold">
                Buy, Sell, or Rent Verified Properties in <em className="font-normal text-[#edc66a] not-italic">Bhadra.</em>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85">
                We assist local buyers and sellers with residential plots, family homes, and commercial shops. Direct owner discussions and hand-verified registry records Near SBI Bank, Dabri Bhadra.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/properties" className="button-primary">
                  Explore Listings <ArrowRight size={17} />
                </Link>
                <Link href="/contact" className="button-secondary">
                  Talk to Our Team
                </Link>
              </div>

              {/* Believable Soft Trust Signals */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6 border-t border-white/10 pt-8 text-xs font-semibold text-white/70 tracking-wide uppercase">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold" />
                  Serving Bhadra since 2014
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold" />
                  Hand-Verified Property Titles
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold" />
                  Direct Owner-to-Buyer Deals
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Search Redirect Bar */}
        <section className="relative z-10 -mt-8 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-luxe border border-slate-100">
            <form action="/properties" method="GET" className="grid gap-4 md:grid-cols-3">
              <div>
                <label htmlFor="search-input" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Search Location or Keyword</label>
                <div className="relative flex items-center">
                  <Search size={16} className="absolute left-3.5 text-slate-400" />
                  <input
                    id="search-input"
                    name="query"
                    placeholder="e.g. Dabri Road, Market..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type-select" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Property Type</label>
                <select
                  id="type-select"
                  name="type"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-gold transition-colors"
                >
                  <option value="All">All Types</option>
                  <option value="Plot">Plot / Land</option>
                  <option value="House">House</option>
                  <option value="Apartment">Flat / Apartment</option>
                  <option value="Commercial">Commercial Space</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-navy text-white hover:bg-gold py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Find Matching Properties <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Areas Served Strip */}
        <section className="bg-slate-50 py-6 border-b border-slate-100">
          <div className="container-page flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <Map size={14} className="text-gold" /> Areas we serve:
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-navy">
              {localAreas.map((area, idx) => (
                <span key={area} className="flex items-center gap-2">
                  {idx > 0 && <span className="hidden md:inline text-slate-300">•</span>}
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-slate-100 pb-6">
            <div>
              <span className="eyebrow">Direct Opportunities</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-navy">Featured properties in Bhadra</h2>
              <p className="mt-2 text-sm text-slate-500 max-w-xl">
                Carefully selected plots and residential spaces with clear documentation and direct pricing.
              </p>
            </div>
            <Link href="/properties" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors">
              See All Listings <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map(property => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-navy py-20 text-white">
          <div className="container-page">
            <div className="max-w-2xl">
              <span className="eyebrow text-[#edc66a]">The Choudhary Standard</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
                No jargon, no fake promises. Just clear, honest property deals.
              </h2>
              <p className="mt-4 text-white/70">
                Buying a plot or a home is one of life’s biggest decisions. We make sure you proceed with absolute confidence and legal peace of mind.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {trustFactors.map(({ Icon, title, text }) => (
                <div key={title} className="border-t border-white/10 pt-6">
                  <div className="inline-flex rounded-lg bg-white/5 p-3 text-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="bg-sand py-20">
          <div className="container-page">
            <div className="max-w-xl text-center mx-auto mb-12">
              <span className="eyebrow">Our Core Services</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-navy">
                How we assist our community
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Whether you are planning to build, move, or invest, we handle everything locally.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ Icon, title, text }) => (
                <article key={title} className="rounded-2xl bg-white p-8 border border-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Local Market Context & Recent Deals */}
        <section className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Local Market Roots</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Deeply connected to the community of Bhadra.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
              Unlike online portal lists that display outdated ads, we manage our properties hands-on. We are located near SBI Bank in Dabri Bhadra, and we encourage clients to walk into our office for an upfront discussion. 
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              If you have agricultural land to sell, or are seeking a residential plot to construct a home, we ensure all registry details, electricity approvals, and road widths match expectations.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <b className="block text-2xl font-bold text-navy">100%</b>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Local Title Matches</span>
              </div>
              <div>
                <b className="block text-2xl font-bold text-navy">Zero</b>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Fake Listings Allowed</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-sand/40 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">Recent Local Transactions</h3>
            <ul className="space-y-4">
              {recentDeals.map(({ detail, status }) => (
                <li key={detail} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="text-emerald-700 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-bold text-navy">{detail}</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">{status}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link href="/contact" className="text-xs font-bold text-navy hover:text-gold uppercase tracking-wider inline-flex items-center gap-1.5">
                Inquire About Selling Your Property <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-sand/30 py-20 border-y border-slate-100">
          <div className="container-page">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="eyebrow">Genuine Reviews</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-navy">
                What local residents say
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Rakesh Sharma",
                  role: "Plot Buyer",
                  context: "Bought a 1,800 sq ft plot at Dabri Road",
                  quote: "Very professional and transparent. Sushil helped us verify the registry documents and guided us on boundary lines before we paid any token money. Extremely trustworthy."
                },
                {
                  name: "Smt. Priya Devi",
                  role: "Home Seller",
                  context: "Sold a 3 BHK Family House near Govt Girls School",
                  quote: "We wanted to sell our family home. Sachin handled the visits and filtered out non-serious queries. We settled the deal in less than a month with clear face-to-face negotiations."
                },
                {
                  name: "Amit Kumar",
                  role: "Commercial Tenant",
                  context: "Leased Commercial Shop in Main Market Bhadra",
                  quote: "Finding retail spaces in Main Market Bhadra with proper parking and clear title is difficult. Choudhary Property got me a clear commercial space in two visits."
                }
              ].map(({ name, role, context, quote }) => (
                <figure key={name} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 text-gold">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star fill="currentColor" size={15} key={i} />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-sm leading-relaxed text-slate-600 italic">
                      “{quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 pt-4 border-t border-slate-100">
                    <p className="font-bold text-navy text-sm">{name}</p>
                    <p className="text-xs text-[#a57825] font-semibold mt-0.5">{role} &middot; <span className="text-slate-500 font-normal">{context}</span></p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="container-page py-20">
          <div className="overflow-hidden rounded-3xl bg-navy px-6 py-12 text-white md:px-14 md:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-[#0b3361] to-[#124683] opacity-50" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#edc66a]">GET AN HONEST VALUATION OR FIND LAND</span>
                <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl font-bold leading-tight">
                  Ready to buy, sell, or rent? Reach our team directly.
                </h2>
                <p className="mt-4 text-white/70 max-w-xl text-sm sm:text-base">
                  No office loops. Speak directly with Sushil or Sachin for straightforward local property advice.
                </p>
              </div>
              <div className="flex flex-wrap gap-3.5 shrink-0">
                <a 
                  href="tel:+917665074030" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-white hover:bg-[#aa7720] px-6 py-3.5 text-sm font-bold transition duration-300"
                >
                  <Phone size={16} /> Call Sushil Now
                </a>
                <a 
                  href="https://wa.me/917665074030" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white hover:text-navy px-6 py-3.5 text-sm font-bold transition duration-300"
                >
                  <MessageCircle size={16} /> WhatsApp Message
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
