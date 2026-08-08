import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
}

export default function WhatsAppButton({
  text = "Solicitar orçamento",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 ${className}`}
    >
      <MessageCircle size={20} />
      {text}
    </a>
  );
}