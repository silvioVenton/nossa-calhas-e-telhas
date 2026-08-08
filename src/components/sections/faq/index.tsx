"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import SectionTitle from "@/components/ui/section-title";
import { faq } from "@/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <SectionTitle
          badge="FAQ"
          title="Perguntas frequentes"
          subtitle="Tire suas principais dúvidas sobre nossos produtos e serviços."
        />

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-900">
                  {item.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t px-6 py-5 text-slate-600 leading-7">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}