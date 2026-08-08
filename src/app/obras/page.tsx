"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/common/page-header";
import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import WhatsAppButton from "@/components/common/whatsapp-button";

const works = [
  {
    image: "/images/obras/obra01.webp",
    category: "Residencial",
    title: "Cobertura Residencial",
    description:
      "Instalação de cobertura metálica com acabamento e solução completa para proteção da residência.",
  },
  {
    image: "/images/obras/obra02.webp",
    category: "Comercial",
    title: "Cobertura Comercial",
    description:
      "Solução em cobertura metálica desenvolvida para atender às necessidades do projeto comercial.",
  },
  {
    image: "/images/obras/obra03.webp",
    category: "Industrial",
    title: "Cobertura Industrial",
    description:
      "Fornecimento e instalação de solução para cobertura de estrutura industrial.",
  },
  {
    image: "/images/obras/obra04.webp",
    category: "Comercial",
    title: "Reforma de Cobertura",
    description:
      "Modernização da cobertura com materiais produzidos para oferecer resistência e durabilidade.",
  },
  {
    image: "/images/obras/obra05.webp",
    category: "Calhas",
    title: "Sistema de Calhas",
    description:
      "Instalação de calhas e componentes para melhorar o escoamento da água da cobertura.",
  },
  {
    image: "/images/obras/obra06.webp",
    category: "Industrial",
    title: "Cobertura Industrial",
    description:
      "Fornecimento e instalação de solução para cobertura de estrutura industrial.",
  },
];

const categories = ["Todos", "Residencial", "Comercial", "Industrial", "Calhas"];

export default function ObrasPage() {
  const [category, setCategory] = useState("Todos");
  const [selectedWork, setSelectedWork] = useState<
    (typeof works)[number] | null
  >(null);

  const filteredWorks =
    category === "Todos"
      ? works
      : works.filter((work) => work.category === category);

  return (
    <main>
      <PageHeader
        title="Nossas Obras"
        description="Veja alguns dos trabalhos realizados pela Nossa Calhas & Telhas."
      />

      <Section>
        <SectionTitle
          badge="Projetos realizados"
          title="Cada obra conta uma história"
          description="Conheça alguns dos projetos em que nossa equipe participou com fornecimento de materiais e soluções para cobertura."
          center
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                category === item
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <button
              key={work.image}
              type="button"
              onClick={() => setSelectedWork(work)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow">
                  {work.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {work.title}
                </h3>

                <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                  {work.description}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-blue-700">
                  Ver projeto →
                </span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900">
            Quer uma solução para sua obra?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Fale com nossa equipe e solicite um orçamento para sua cobertura.
          </p>

          <div className="mt-8">
            <WhatsAppButton text="Solicitar orçamento" />
          </div>
        </div>
      </Section>

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
              aria-label="Fechar"
            >
              ×
            </button>

            <div className="relative aspect-video">
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="p-6 md:p-8">
              <span className="text-sm font-bold text-blue-700">
                {selectedWork.category}
              </span>

              <h2 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">
                {selectedWork.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {selectedWork.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}