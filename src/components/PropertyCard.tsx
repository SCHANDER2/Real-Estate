import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, MapPin, Ruler } from "lucide-react";
import { Property, formatPrice } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/95 text-white backdrop-blur-sm px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
          {property.type}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-bold text-navy">{formatPrice(property.price)}</p>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded uppercase tracking-wider">
            Verified Title
          </span>
        </div>

        <h3 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-gold transition-colors duration-200">
          {property.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} className="text-gold shrink-0" />
          {property.location}
        </p>

        {/* Short Highlight */}
        <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed flex-grow">
          {property.description}
        </p>

        {/* Property Specs */}
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1">
            <Ruler size={14} className="text-navy" />
            {property.area.toLocaleString()} sq ft
          </span>
          {property.bedrooms && (
            <span className="flex items-center gap-1">
              <BedDouble size={14} className="text-navy" />
              {property.bedrooms} Bed{property.bedrooms > 1 ? 's' : ''}
            </span>
          )}
          {property.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={14} className="text-navy" />
              {property.bathrooms} Bath{property.bathrooms > 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-5 pt-1">
          <Link
            className="flex items-center justify-center gap-2 rounded-xl bg-navy text-white hover:bg-gold py-3 px-4 text-sm font-bold transition-all duration-300 w-full"
            href={`/properties/${property.id}`}
          >
            View Details & Enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
