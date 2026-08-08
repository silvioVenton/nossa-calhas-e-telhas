import {
  Award,
  Clock3,
  Factory,
  Users,
} from "lucide-react";

import SectionTitle from "@/components/ui/section-title";

const items = [
  {
    icon: Factory,
    title: "Fábrica Própria",
    description:
      "Produzimos telhas metálicas, calhas, rufos e condutores sob medida.",
  },
  {
    icon: Award,
    title: "15 Anos de Experiência",
    description:
      "Experiência no atendimento de obras residenciais, comerciais e industriais.",
  },
  {
    icon: Clock3,
    title: "Entrega Ágil",
    description:
      "Produção e entrega rápidas para não atrasar sua obra.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais qualificados para fabricação e instalação.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="POR QUE ESCOLHER A NOSSA CALHAS & TELHAS"
          title="Qualidade, agilidade e confiança em um só lugar"
          subtitle="Nossa equipe acompanha seu projeto do orçamento à entrega, oferecendo produtos fabricados sob medida e instalação profissional."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}