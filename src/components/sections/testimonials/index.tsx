import { Star } from "lucide-react";

import SectionTitle from "@/components/ui/section-title";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="DEPOIMENTOS"
          title="O que nossos clientes dizem"
          subtitle="A satisfação dos nossos clientes é o nosso maior compromisso."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1 text-yellow-500">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="leading-8 text-slate-600">
                "{item.text}"
              </p>

              <div className="mt-6 border-t pt-5">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.city}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}