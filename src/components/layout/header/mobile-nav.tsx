"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { menu } from "./menu";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        <Menu size={28} />
      </button>

      {open && (
          <div
            className="fixed left-0 top-0 z-[99999] h-[100dvh] w-screen bg-black/60 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            onClick={() => setOpen(false)}
          >
          <div
            className="absolute right-0 top-0 flex h-[100dvh] w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 p-5">
              <div>
                <p className="text-lg font-black text-slate-900">
                  Nossa Calhas
                </p>

                <p className="text-sm text-slate-500">
                  Coberturas metálicas
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                aria-label="Fechar menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 p-5">
              {menu.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-4 text-lg font-semibold transition ${
                      active
                        ? "bg-blue-700 text-white"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="shrink-0 border-t border-slate-200 bg-white p-5">
              <a
                href="tel:{company.phone}"
                className="mb-3 flex items-center gap-3 rounded-xl border border-slate-200 p-4 font-medium text-slate-700"
              >
                <Phone size={20} />
                {company.phone}
              </a>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                <MessageCircle size={20} />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}