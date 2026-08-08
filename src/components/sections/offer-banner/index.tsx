import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";

import { offer } from "@/data/offer";

export default function OfferBanner() {
  if (!offer.active) {
    return null;
  }

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    offer.whatsappMessage
  )}`;

  return (
    <section
      aria-label="Oferta especial"
      className="relative overflow-hidden bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
          <div className="grid items-center lg:grid-cols-[1fr_280px]">
            {/* CONTEÚDO */}
            <div className="relative z-10 p-5 sm:p-7 lg:p-8">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg">
                <Flame size={16} />
                {offer.badge}
              </div>

              {/* Título */}
              <h2 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                {offer.title}
              </h2>

              {/* Descrição */}
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                {offer.description}
              </p>

              {/* Preço + CTA */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Oferta
                  </p>

                  <div className="mt-1 flex flex-wrap items-baseline gap-2">
                    <span className="text-3xl font-black text-orange-400 sm:text-4xl">
                      {offer.price}
                    </span>

                    <span className="text-sm font-semibold text-slate-300">
                      {offer.unit}
                    </span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {offer.buttonText}
                  <ArrowRight size={19} />
                </a>
              </div>

              {/* Validade */}
              <p className="mt-4 text-xs text-slate-400">
                {offer.validity}
              </p>
            </div>

            {/* IMAGEM */}
            <div className="relative hidden h-full min-h-[230px] lg:block">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                sizes="280px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}