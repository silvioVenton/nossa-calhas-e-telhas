"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menu } from "./menu";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {menu.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-[15px] font-semibold transition-all duration-300 hover:text-blue-700 ${
              active
                ? "text-blue-700"
                : "text-slate-700"
            }`}
          >
            {item.label}

            <span
              className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-orange-500 transition-all duration-300 ${
                active ? "w-full" : "w-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}