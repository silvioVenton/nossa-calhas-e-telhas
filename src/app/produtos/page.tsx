import Link from "next/link";
import Image from "next/image";

import { products } from "@/data/products";

export default function ProdutosPage() {
  return (
    <main className="bg-slate-50">

      <section className="bg-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-black">
            Nossos Produtos
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Fabricamos telhas metálicas, telhas termoacústicas,
            calhas, rufos e condutores com qualidade e rapidez.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={700}
                height={500}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {product.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {product.shortDescription}
                </p>

                <Link
                  href={`/produtos/${product.slug}`}
                  className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  Ver Produto
                </Link>

              </div>

            </article>
          ))}

        </div>
      </section>

    </main>
  );
}