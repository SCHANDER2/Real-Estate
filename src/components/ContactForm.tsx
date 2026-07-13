"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm({ propertyId, defaultPropertyType }: { propertyId?: string; defaultPropertyType?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (propertyId) payload.propertyId = propertyId;
    try {
      const r = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error();
      setState("success");
      e.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Contact Info */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="form-name" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">Your Name *</label>
          <input
            id="form-name"
            required
            name="name"
            placeholder="e.g. Ramesh Kumar"
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="form-phone" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">Phone Number *</label>
          <input
            id="form-phone"
            required
            name="phone"
            inputMode="tel"
            placeholder="e.g. 9876543210"
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-email" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">Email Address (Optional)</label>
        <input
          id="form-email"
          name="email"
          type="email"
          placeholder="e.g. ramesh@example.com"
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      {/* Qualification Grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="form-req-type" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">I want to...</label>
          <select
            id="form-req-type"
            name="requirementType"
            defaultValue={propertyId ? "Buy" : "Buy"}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold"
          >
            <option value="Buy">Buy Property</option>
            <option value="Sell">Sell Property</option>
            <option value="Rent">Rent Property</option>
            <option value="Investment">Invest</option>
          </select>
        </div>

        <div>
          <label htmlFor="form-prop-type" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">Property Type</label>
          <select
            id="form-prop-type"
            name="propertyType"
            defaultValue={defaultPropertyType || "Plot"}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold"
          >
            <option value="Plot">Plot / Land</option>
            <option value="House">House</option>
            <option value="Flat">Flat / Apartment</option>
            <option value="Commercial">Commercial Shop / Office</option>
            <option value="Farm land">Farm Land</option>
          </select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="form-area" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">Preferred Location</label>
          <input
            id="form-area"
            name="preferredArea"
            placeholder="e.g. Dabri, Dabri Road, Bhadra"
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>

        <div>
          <label htmlFor="form-budget" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">Budget Range</label>
          <input
            id="form-budget"
            name="budget"
            placeholder="e.g. 15-25 Lakh, or 10k/mo"
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-timeline" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">When do you want to move/buy?</label>
        <select
          id="form-timeline"
          name="timeline"
          defaultValue="Immediate"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold"
        >
          <option value="Immediate">Immediate</option>
          <option value="1 month">Within 1 Month</option>
          <option value="3 months">Within 3 Months</option>
          <option value="Just exploring">Just Exploring</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="form-message" className="block text-[11px] font-bold text-navy/75 uppercase tracking-wider mb-1">How can we help? *</label>
        <textarea
          id="form-message"
          required
          name="message"
          rows={3}
          defaultValue={propertyId ? "I would like to know more about this property and check its documentation." : ""}
          placeholder="Write details or questions here..."
          className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>

      <button
        disabled={state === "sending"}
        className="button-primary w-full disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {state === "sending" ? "Sending…" : <><Send size={16}/> Send Enquiry</>}
      </button>

      {state === "success" && (
        <div className="rounded-lg bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-800 border border-emerald-100 mt-2">
          Thank you! Sushil or Sachin will contact you shortly (usually within 2 hours).
        </div>
      )}
      {state === "error" && (
        <div className="rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-800 border border-red-100 mt-2">
          Something went wrong. Please call us directly at +91 76650 74030.
        </div>
      )}
    </form>
  );
}
