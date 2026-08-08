import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { cities } from "@/data/cities";

type Props = {
  params: Promise<{
    cidade: string;
  }>;
};

export async function generateStaticParams() {
  return cities.map((city) => ({
    cidade: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { cidade } = await params;

  const city = cities.find((item) => item.slug === cidade);

  if (!city) return {};

  return {
    title: `Telhas Metálicas em ${city.name} | Nossa Calhas & Telhas`,
    description: `Fabricação e instalação de telhas metálicas, telhas termoacústicas, calhas e rufos em ${city.name}.`,
  };
}

export default async function CidadePage({ params }: Props) {
  const { cidade } = await params;

  const city = cities.find((item) => item.slug === cidade);

  if (!city) {
    notFound();
  }

  return (
    <main>
      <section className="bg-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-black">
            Telhas Metálicas em {city.name}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Fabricação própria de telhas metálicas, telhas termoacústicas,
            calhas, rufos e instalação completa em {city.name}.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-black">
          Atendimento especializado em {city.name}
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          Atuamos em {city.name} oferecendo fabricação própria,
          entrega rápida, produtos sob medida e mão de obra especializada
          para obras residenciais, comerciais e industriais.
        </p>

      </section>
    </main>
  );
}