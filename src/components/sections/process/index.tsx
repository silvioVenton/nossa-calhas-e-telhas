import {
  ClipboardList,
  Factory,
  Truck,
  Hammer,
} from "lucide-react";

import SectionTitle from "@/components/ui/section-title";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Solicite um orçamento",
    description:
      "Entre em contato conosco e informe as medidas e necessidades da sua obra.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Produção",
    description:
      "Fabricamos os produtos sob medida utilizando matéria-prima de qualidade.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Entrega",
    description:
      "Realizamos a entrega com rapidez para manter o cronograma da sua obra.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Instalação",
    description:
      "Nossa equipe executa a instalação com segurança, qualidade e garantia.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="COMO TRABALHAMOS"
          title="Um processo simples e eficiente"
          subtitle="Acompanhamos sua obra desde o primeiro contato até a conclusão do serviço."
        />

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  {step.number}
                </span>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}