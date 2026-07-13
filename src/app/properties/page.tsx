"use client";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "All";
  const initialQuery = searchParams.get("query") || "";

  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState(initialType);
  const [beds, setBeds] = useState("All");
  const [price, setPrice] = useState("All");

  const matching = useMemo(() => {
    return properties.filter(p => {
      const matchesType = type === "All" || p.type === type;
      const matchesBeds = beds === "All" || p.bedrooms === Number(beds);
      
      let matchesPrice = true;
      if (price === "under30") {
        matchesPrice = p.price < 3000000;
      } else if (price === "30to60") {
        matchesPrice = p.price >= 3000000 && p.price <= 6000000;
      } else if (price === "over60") {
        matchesPrice = p.price > 6000000;
      }

      const matchesQuery = 
        `${p.title} ${p.location} ${p.description} ${p.type}`
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesType && matchesBeds && matchesPrice && matchesQuery;
    });
  }, [query, type, beds, price]);

  return (
    <main className="container-page py-10">
      {/* Filters Card */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-luxe">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Filter listings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-3.5 text-slate-400" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="Search by area or keyword (e.g. Dabri)"
            />
          </div>

          <div className="flex flex-col">
            <select
              aria-label="Property type"
              value={type}
              onChange={e => setType(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold"
            >
              <option value="All">All Property Types</option>
              <option value="Plot">Plot / Land</option>
              <option value="House">House</option>
              <option value="Apartment">Flat / Apartment</option>
              <option value="Commercial">Commercial Space</option>
              <option value="Villa">Villa</option>
            </select>
          </div>

          <div className="flex flex-col">
            <select
              aria-label="Bedrooms"
              value={beds}
              onChange={e => setBeds(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold"
            >
              <option value="All">Any Bedrooms</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5 Bedrooms</option>
            </select>
          </div>

          <div className="flex flex-col">
            <select
              aria-label="Price range"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-gold"
            >
              <option value="All">Any Budget</option>
              <option value="under30">Under ₹30 Lakh</option>
              <option value="30to60">₹30 Lakh - ₹60 Lakh</option>
              <option value="over60">Above ₹60 Lakh</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="mt-10 flex items-center justify-between border-b border-slate-100 pb-4">
        <p className="text-sm text-slate-500">
          Showing <span className="font-bold text-navy">{matching.length}</span> properties matching your search
        </p>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {matching.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>

      {matching.length === 0 && (
        <div className="py-20 text-center rounded-2xl bg-sand/20 border border-dashed border-slate-200 mt-8">
          <p className="font-display text-2xl font-bold text-navy">No matching properties found.</p>
          <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
            Try clearing search filters or call our team directly at +91 76650 74030. We often have unlisted plots and commercial opportunities available.
          </p>
          <button 
            onClick={() => { setQuery(""); setType("All"); setBeds("All"); setPrice("All"); }}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-gold transition-all duration-300"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </main>
  );
}

export default function PropertiesPage() {
  return (
    <>
      <div className="bg-navy pb-16 text-white">
        <Navbar />
        <div className="container-page pt-36">
          <span className="eyebrow text-[#edc66a]">FIND YOUR PLACE IN BHADRA</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Properties to explore</h1>
          <p className="mt-4 max-w-xl text-white/70 text-sm sm:text-base">
            Browse verified homes, residential plots, commercial shops, and land parcels in and around Dabri Bhadra.
          </p>
        </div>
      </div>
      
      <Suspense fallback={
        <div className="py-24 text-center">
          <p className="text-slate-500">Loading listings...</p>
        </div>
      }>
        <PropertiesContent />
      </Suspense>

      <Footer />
    </>
  );
}
