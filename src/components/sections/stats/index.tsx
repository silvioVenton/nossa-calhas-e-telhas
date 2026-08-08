import {
  Factory,
  Hammer,
  MapPinned,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: Factory,
    number: "15+",
    title: "Anos de experiência",
  },
  {
    icon: Truck,
    number: "9",
    title: "Cidades atendidas",
  },
  {
    icon: Hammer,
    number: "100%",
    title: "Mão de obra especializada",
  },
  {
    icon: MapPinned,
    number: "Fábrica",
    title: "Produção própria",
  },
];

export default function Stats() {
  return (
    <section className="border-y bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-black text-slate-900">
                  {item.number}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}