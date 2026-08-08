import PageHeader from "@/components/common/page-header";
import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import Card from "@/components/common/card";
import WhatsAppButton from "@/components/common/whatsapp-button";

const services = [
  {
    title: "Fabricação de Telhas Metálicas",
    description:
      "Fabricamos telhas metálicas sob medida para residências, comércios, galpões e estruturas industriais.",
  },
  {
    title: "Telhas Termoacústicas",
    description:
      "Soluções termoacústicas para melhorar o conforto térmico e acústico dos ambientes.",
  },
  {
    title: "Calhas e Rufos",
    description:
      "Fabricamos calhas, rufos, condutores e pingadeiras sob medida para diferentes tipos de cobertura.",
  },
  {
    title: "Instalação de Coberturas",
    description:
      "Equipe especializada para instalação de telhas metálicas, calhas, rufos e demais componentes.",
  },
  {
    title: "Manutenção de Coberturas",
    description:
      "Serviços para manutenção, substituição e adequação de sistemas de cobertura.",
  },
  {
    title: "Soluções para Obras",
    description:
      "Fornecimento de materiais e mão de obra para construtores, empreiteiros, empresas e clientes residenciais.",
  },
];

export default function ServicosPage() {
  return (
    <main>
      <PageHeader
        title="Nossos Serviços"
        description="Soluções completas em telhas metálicas, telhas termoacústicas, calhas, rufos e instalação."
      />

      <Section>
        <SectionTitle
          badge="Soluções completas"
          title="Tudo para sua cobertura"
          description="Da fabricação dos materiais à instalação, oferecemos soluções para diferentes tipos de obras."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900">
            Precisa de uma solução para sua obra?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Fale com nossa equipe e solicite um orçamento para materiais
            e instalação.
          </p>

          <div className="mt-8">
            <WhatsAppButton text="Solicitar orçamento" />
          </div>
        </div>
      </Section>
    </main>
  );
}