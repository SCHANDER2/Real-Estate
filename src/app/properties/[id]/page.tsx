import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Bath, 
  BedDouble, 
  Check, 
  MapPin, 
  Ruler, 
  Phone, 
  MessageCircle, 
  FileText, 
  Compass, 
  Home 
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { formatPrice, properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map(p => ({ id: p.id }));
}

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find(p => p.id === id);
  if (!property) notFound();

  // Find 3 related properties, excluding the current one
  let related = properties.filter(p => p.id !== id && p.type === property.type).slice(0, 3);
  if (related.length < 3) {
    const extra = properties.filter(p => p.id !== id && p.type !== property.type).slice(0, 3 - related.length);
    related = [...related, ...extra];
  }

  return (
    <>
      <div className="bg-navy text-white">
        <Navbar />
        <div className="container-page pt-28 pb-8">
          <Link href="/properties" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
            <ArrowLeft size={16} /> Back to all properties
          </Link>
        </div>
      </div>

      <main className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Main Info */}
          <div>
            <div className="relative h-[460px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
              <Image 
                src={property.image} 
                alt={property.title} 
                fill 
                priority 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded bg-navy text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {property.type}
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-500 font-semibold">
                  <MapPin size={15} className="text-gold" />
                  {property.location}
                </span>
              </div>

              <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy">{property.title}</h1>
              <p className="mt-3 text-3xl font-bold text-gold">{formatPrice(property.price)}</p>

              {/* Specs Grid */}
              <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 rounded-xl bg-sand/60 p-5 text-sm font-semibold text-navy">
                <div className="flex items-center gap-2.5">
                  <Ruler size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Area Size</span>
                    <span>{property.area.toLocaleString()} sq ft</span>
                  </div>
                </div>
                {property.bedrooms && (
                  <div className="flex items-center gap-2.5">
                    <BedDouble size={18} className="text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-500 font-medium">Bedrooms</span>
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2.5">
                    <Bath size={18} className="text-gold shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-500 font-medium">Bathrooms</span>
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2.5">
                  <Compass size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Facing</span>
                    <span>East-Facing</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Home size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Status</span>
                    <span>Ready for Registry</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileText size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Title Deed</span>
                    <span className="text-emerald-700">Clear Title</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <h2 className="mt-9 font-display text-2xl font-bold text-navy border-b border-slate-100 pb-3">
                About this property
              </h2>
              <p className="mt-4 leading-8 text-slate-600 text-sm sm:text-base">
                {property.description}
              </p>

              {/* Amenities */}
              <h2 className="mt-9 font-display text-2xl font-bold text-navy border-b border-slate-100 pb-3">
                Key features & amenities
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.amenities.map(a => (
                  <li className="flex items-center gap-2.5 text-sm text-slate-600 font-medium" key={a}>
                    <span className="grid h-6.5 w-6.5 place-items-center rounded-full bg-[#f6ead3] text-gold p-1 shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-luxe">
              <span className="eyebrow">Interested?</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy">Request details</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Sushil or Sachin will get back to you with registry papers and maps.
              </p>
              
              <div className="my-5 h-px bg-slate-100" />
              
              <ContactForm propertyId={property.id} defaultPropertyType={property.type} />

              <div className="my-5 h-px bg-slate-100" />

              <div className="space-y-2">
                <p className="text-[11px] font-bold text-navy/70 uppercase tracking-wider text-center">Or talk directly:</p>
                <a 
                  href="tel:+917665074030" 
                  className="flex items-center justify-center gap-2 rounded-xl bg-navy text-white hover:bg-gold py-2.5 px-4 text-xs font-bold transition-all duration-300 w-full"
                >
                  <Phone size={14} /> Call Sushil (+91 76650 74030)
                </a>
                <a 
                  href="https://wa.me/917665074030" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 py-2.5 px-4 text-xs font-bold transition-all duration-300 w-full"
                >
                  <MessageCircle size={14} /> WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Location Notice Block */}
        <div className="mt-12 rounded-2xl bg-sand/60 p-6 sm:p-8 border border-slate-100">
          <div className="flex gap-3">
            <MapPin className="text-gold mt-1 shrink-0" size={20} />
            <div>
              <h3 className="text-base font-bold text-navy">Exact Location & Site Visits</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                This property is located in <b>{property.location}</b>. Because plots and houses require physically inspecting land layout and adjacent roads, we arrange free guided site visits. Contact Sushil or Sachin to schedule a convenient time or view original registry papers.
              </p>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        <section className="mt-20 border-t border-slate-100 pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-8">Related properties you may like</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
