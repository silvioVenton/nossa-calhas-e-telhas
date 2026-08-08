import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";

const works = [
  {
    id: 1,
    image: "/images/gallery/obra-1.webp",
    title: "Cobertura Industrial",
  },
  {
    id: 2,
    image: "/images/gallery/obra-2.webp",
    title: "Telha Termoacústica",
  },
  {
    id: 3,
    image: "/images/gallery/obra-3.webp",
    title: "Cobertura Residencial",
  },
  {
    id: 4,
    image: "/images/gallery/obra-4.webp",
    title: "Calhas Sob Medida",
  },
  {
    id: 5,
    image: "/images/gallery/obra-5.webp",
    title: "Galpão Comercial",
  },
  {
    id: 6,
    image: "/images/gallery/obra-6.webp",
    title: "Reforma de Telhado",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="OBRAS REALIZADAS"
          title="Conheça alguns dos nossos trabalhos"
          subtitle="Projetos executados com qualidade, rapidez e acabamento profissional."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.id}
              className="group overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={700}
                height={500}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-white p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}