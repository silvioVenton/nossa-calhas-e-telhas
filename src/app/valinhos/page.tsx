import Link from "next/link";

export const metadata = {
  title: "Telhas Metálicas em Valinhos| Nossa Calhas & Telhas",
  description:
    "Fabricação e instalação de telhas metálicas, telhas termoacústicas, calhas e rufos em Valinhos.",
};

export default function JundiaiPage() {
  return (
    <main>

      <section className="bg-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-black">
            Telhas Metálicas em Valinhos
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Atendemos Valinhos com fabricação própria de telhas metálicas,
            telhas termoacústicas, calhas, rufos e instalação completa.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-black">
          Atendimento em toda Valinhos
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          Nossa Calhas & Telhas fabrica produtos sob medida para
          residências, galpões, comércios e indústrias em Valinhos,
          oferecendo rapidez, qualidade e mão de obra especializada.
        </p>

        <Link
          href="/contato"
          className="mt-10 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white"
        >
          Solicitar orçamento
        </Link>

      </section>

    </main>
  );
}