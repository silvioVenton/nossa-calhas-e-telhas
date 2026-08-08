"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-slate-900 text-white lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">
          <div className="flex items-center gap-6">
            <span>
              📍 {company.cities.join(" • ")}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Phone size={14} />
              {company.phone}
            </a>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 ">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
  <Image
  src="/images/logo.png"
  alt="Logo"
  width={250}
  height={80}
  className="h-16 w-auto"
/>


            <div className="hidden sm:block">
              <p className="text-xl font-extrabold text-slate-900">
                {company.name}
              </p>
              <p className="text-xs text-slate-500">
                Fabricação • Instalação • Coberturas
              </p>
            </div>
          </Link>

          {/* Menu Desktop */}
          <DesktopNav />

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Solicitar orçamento
            </a>
          </div>

          {/* Menu Mobile */}
          <MobileNav />
        </div>
      </header>
    </>
  );
}