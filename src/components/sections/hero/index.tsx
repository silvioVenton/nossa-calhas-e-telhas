import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "Fábrica própria",
  "15 anos de experiência",
  "Entrega rápida",
  "Mão de obra especializada",
];

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* TEXTO */}
          <div className="w-full min-w-0">
            <span className="inline-flex max-w-full rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-600 sm:text-sm">
              ✓ 15 ANOS DE EXPERIÊNCIA
            </span>

            <h1 className="mt-5 w-full text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Fabricação de{" "}
              <span className="text-blue-700">
                Telhas Metálicas
              </span>{" "}
              Calhas e Coberturas
            </h1>

            <p className="mt-6 w-full max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Fabricamos telhas metálicas, telhas termoacústicas,
              calhas, rufos e condutores sob medida. Também
              executamos instalação completa para obras residenciais,
              comerciais e industriais.
            </p>

            {/* BOTÕES */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-4 text-center font-bold text-white transition hover:bg-orange-600 sm:w-auto"
              >
                <MessageCircle size={22} className="shrink-0" />
                <span>Solicitar orçamento</span>
              </a>

              <Link
                href="/produtos"
                className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl border-2 border-blue-700 px-5 py-4 text-center font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white sm:w-auto"
              >
                <span>Conheça nossos produtos</span>
                <ArrowRight size={20} className="shrink-0" />
              </Link>
            </div>

            {/* BENEFÍCIOS */}
            <div className="mt-9 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-3"
                >
                  <CheckCircle
                    className="shrink-0 text-green-600"
                    size={22}
                  />

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM */}
<div className="relative w-full min-w-0">
  <div className="relative w-full rounded-3xl shadow-2xl">
    <Image
      src="/images/hero/hero.webp"
      alt="Nossa Calhas e Telhas"
      width={900}
      height={700}
      priority
      className="h-auto w-full rounded-3xl object-cover"
    />

    {/* CARD 15+ */}
    <div className="absolute left-3 top-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:left-5 sm:top-5 sm:p-6 lg:-left-8 lg:top-12">
      <p className="text-3xl font-black text-blue-700 sm:text-4xl">
        15+
      </p>

      <p className="text-sm font-semibold text-slate-700">
        Anos de mercado
      </p>
    </div>

    {/* CARD 100% */}
    <div className="absolute bottom-3 right-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-5 sm:right-5 sm:p-6 lg:-bottom-8 lg:right-8">
      <p className="text-3xl font-black text-orange-500 sm:text-4xl">
        100%
      </p>

      <p className="text-sm font-semibold text-slate-700">
        Fabricação própria
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}