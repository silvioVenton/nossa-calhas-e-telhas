import Image from "next/image";
import Link from "next/link";

import SectionTitle from "@/components/ui/section-title";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="NOSSOS PRODUTOS"
          title="Fabricamos e fornecemos soluções completas para sua cobertura"
          subtitle="Produção própria de telhas metálicas, calhas, rufos e condutores, além da revenda de telhas de fibrocimento."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={420}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {product.shortDescription}
                </p>

                <Link
                  href={`/produtos/${product.slug}`}
                  className="mt-6 inline-flex font-semibold text-blue-700 hover:text-orange-500"
                >
                  Saiba mais →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}