export interface MenuItem {
  label: string;
  href: string;
}

export const menu: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Produtos",
    href: "/produtos",
  },
  {
    label: "Serviços",
    href: "/servicos",
  },
  {
    label: "Obras",
    href: "/obras",
  },
  {
    label: "Empresa",
    href: "/empresa",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];