import {
  Building2,
  HardHat,
  Home,
  Warehouse,
} from "lucide-react";

const audience = [
  {
    icon: Home,
    title: "Residências",
    text: "Coberturas, reformas e instalação de telhas metálicas e termoacústicas.",
  },
  {
    icon: HardHat,
    title: "Construtoras",
    text: "Fornecimento em grandes volumes com entrega rápida.",
  },
  {
    icon: Warehouse,
    title: "Galpões Industriais",
    text: "Projetos para indústrias, comércios e centros logísticos.",
  },
  {
    icon: Building2,
    title: "Condomínios",
    text: "Reformas, manutenção e substituição completa de coberturas.",
  },
];

export default function Audience() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="font-semibold text-blue-700">
            QUEM ATENDEMOS
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            Soluções para qualquer tipo de obra
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Atendemos desde pequenas reformas residenciais até grandes obras
            comerciais e industriais.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}