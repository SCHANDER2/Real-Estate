import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <div className="bg-navy pb-16 text-white">
        <Navbar />
        <div className="container-page pt-36">
          <span className="eyebrow text-[#edc66a]">LET’S MAKE YOUR MOVE</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">We’re ready to help.</h1>
          <p className="mt-4 max-w-xl text-white/70 text-sm sm:text-base">
            Reach out to our local team for verified properties, honest advice, or to list your plot/house.
          </p>
        </div>
      </div>

      <main className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact Details */}
          <div>
            <span className="eyebrow">Contact Choudhary Property</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">Talk to the local experts.</h2>
            <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
              Whether you want to buy, sell, rent or simply understand your choices, our team is here for a clear, straightforward conversation.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-navy mt-1">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <b className="block text-navy text-base">Direct Calls</b>
                  <p className="text-xs text-slate-500 mt-0.5">Click below to dial our agents directly:</p>
                  <div className="mt-2.5 flex flex-wrap gap-3">
                    <a href="tel:+917665074030" className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-gold transition-all duration-300">
                      Call Sushil: +91 76650 74030
                    </a>
                    <a href="tel:+918005940709" className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-gold transition-all duration-300">
                      Call Sachin: +91 80059 40709
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-navy mt-1">
                  <MessageCircle size={20} className="text-gold" />
                </div>
                <div>
                  <b className="block text-navy text-base">WhatsApp Support</b>
                  <p className="text-sm text-slate-600 mt-0.5">Message us for sharing property locations, images, and layout designs.</p>
                  <a href="https://wa.me/917665074030" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 px-4 py-2 text-xs font-bold transition-all duration-300">
                    <MessageCircle size={15} /> Message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-navy mt-1">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <b className="block text-navy text-base">Office Location</b>
                  <p className="text-sm text-slate-600 mt-0.5">Near SBI Bank, Dabri Bhadra, Hanumangarh, Rajasthan - 335503</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Feel free to walk in for face-to-face property valuations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sand text-navy mt-1">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <b className="block text-navy text-base">Response Timing</b>
                  <p className="text-sm text-slate-600 mt-0.5">We are available from 9:00 AM to 8:00 PM every day.</p>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">We usually respond to enquiries within 2 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-sand/50 p-6 sm:p-8 border border-slate-100">
              <h2 className="font-display text-2xl font-bold text-navy">Send an enquiry</h2>
              <p className="mt-1 mb-6 text-sm text-slate-500">Provide details about your budget, timeline, and requirements so we can assist you better.</p>
              <ContactForm />
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm h-64 relative bg-slate-100">
              <iframe
                title="SBI Bank, Dabri Bhadra - Location Map"
                src="https://maps.google.com/maps?q=SBI%20Bank,%20Dabri,%20Hanumangarh,%20Rajasthan%20335503&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
