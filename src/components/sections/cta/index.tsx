import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function CTA() {
  return (
    <section className="bg-blue-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-black text-white lg:text-5xl">
          Solicite seu orçamento sem compromisso
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Fabricamos telhas metálicas, telhas termoacústicas, calhas, rufos e
          condutores. Também realizamos instalação completa com equipe
          especializada.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            <MessageCircle size={22} />
            Chamar no WhatsApp
          </a>

          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
          >
            Solicitar orçamento
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>
    </section>
  );
}