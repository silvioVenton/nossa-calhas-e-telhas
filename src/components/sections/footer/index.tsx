import Link from "next/link";
import { company } from "@/data/company";

const products = [
  {
    name: "Telhas Metálicas",
    href: "/produtos",
  },
  {
    name: "Telhas Termoacústicas",
    href: "/produtos",
  },
  {
    name: "Calhas e Rufos",
    href: "/produtos",
  },
];

const links = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Produtos",
    href: "/produtos",
  },
  {
    name: "Serviços",
    href: "/servicos",
  },
  {
    name: "Obras",
    href: "/obras",
  },
  {
    name: "Empresa",
    href: "/empresa",
  },
  {
    name: "Contato",
    href: "/contato",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-black"
            >
              {company.name}
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Soluções em telhas metálicas, telhas termoacústicas,
              calhas, rufos e instalação para obras residenciais,
              comerciais e industriais.
            </p>

            <div className="mt-6">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Produtos
            </h3>

            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold">
              Atendimento
            </h3>

            <p className="mt-3 text-slate-400">
              Segunda a sexta: 7h às 17h
              <br />
              Sábado: 7h às 12h
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Nossa loja
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Avenida Pacaembu, 836
              <br />
              Jardim Paulista
              <br />
              Várzea Paulista - SP
            </p>

            <p className="mt-5 text-slate-400">
              {company.phone}
              <br />
              {company.email}
            </p>

            <a
              href="https://maps.app.goo.gl/eEf4UszvsJMthaFg6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-bold text-orange-400 hover:text-orange-300"
            >
              Como chegar →
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {company.name}. Todos os
              direitos reservados.
            </p>

            <p>
              Telhas metálicas • Calhas • Rufos • Instalação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}