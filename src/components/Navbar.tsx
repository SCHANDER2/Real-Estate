"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "/", label: "Home" }, { href: "/properties", label: "Properties" }, { href: "/#services", label: "Services" }, { href: "/contact", label: "Contact" }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="absolute z-30 w-full text-white"><div className="container-page flex h-20 items-center justify-between">
    <Link href="/" className="flex items-center gap-3" aria-label="Choudhary Property home"><span className="grid h-10 w-10 place-items-center rounded-full border border-gold bg-navy font-display text-xl text-gold">C</span><span><b className="block text-lg tracking-wide">CHOUDHARY</b><span className="block text-[10px] tracking-[.32em] text-gold">PROPERTY</span></span></Link>
    <nav className="hidden items-center gap-7 lg:flex">{links.map(link => <Link className="text-sm font-medium transition hover:text-gold" key={link.href} href={link.href}>{link.label}</Link>)}<a href="tel:+917665074030" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold hover:bg-white hover:text-navy"><Phone size={15}/> Call now</a></nav>
    <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/30 lg:hidden" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </div>{open && <nav className="container-page border-t border-white/15 bg-navy/95 py-5 lg:hidden">{links.map(link => <Link onClick={() => setOpen(false)} className="block py-3 text-sm font-bold" key={link.href} href={link.href}>{link.label}</Link>)}<a className="mt-2 block text-gold" href="tel:+917665074030">+91 76650 74030</a></nav>}</header>;
}
