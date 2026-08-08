import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { products } from "@/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: product.seoTitle,

    description: product.seoDescription,

    keywords: product.keywords,

    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [product.image],
      type: "website",
    },
  };
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">{product.title}</h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            {product.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <Image
            src={product.image}
            alt={product.title}
            width={900}
            height={700}
            className="rounded-3xl object-cover"
          />

          <div>
            <h2 className="text-3xl font-black text-slate-900">
              Sobre o produto
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {product.shortDescription}
            </p>

            <ul className="mt-8 space-y-3 text-slate-700">
              <li>✔ Fabricação própria</li>
              <li>✔ Alta durabilidade</li>
              <li>✔ Excelente acabamento</li>
              <li>✔ Entrega rápida</li>
            </ul>

            <Link
              href="/contato"
              className="mt-10 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}