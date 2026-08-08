import PageHeader from "@/components/common/page-header";
import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import Card from "@/components/common/card";
import WhatsAppButton from "@/components/common/whatsapp-button";

export default function EmpresaPage() {
  return (
    <main>
      <PageHeader
        title="Nossa Empresa"
        description="Uma história construída com trabalho, dedicação, qualidade e compromisso com nossos clientes."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            badge="Nossa história"
            title="Uma empresa que nasceu de um sonho"
            center
          />

          <div className="mt-12 space-y-6 text-lg leading-8 text-slate-600">
            <p>
              <strong className="text-slate-900">
                Tudo começou com um sonho. O sonho de um homem simples,
                determinado a dar à sua família uma vida mais digna, mais
                segura e com mais oportunidades.
              </strong>
            </p>

            <p>
              Foi da necessidade, do esforço diário e da vontade de vencer
              que nasceu o embrião da nossa empresa. No início, o trabalho
              era duro e artesanal: fornecendo calhas e acessórios para
              telhados com chapas galvanizadas, sempre com o olhar atento à
              qualidade e ao bom atendimento.
            </p>

            <p>
              Com o passar dos anos, a dedicação, a ética no trato com
              parceiros e a busca constante por melhorias foram moldando
              não apenas uma empresa — mas uma história de superação,
              responsabilidade e visão de futuro.
            </p>

            <p>
              Hoje, mais do que fornecer materiais para cobertura, fabricamos
              as próprias telhas metálicas que levam nossa marca e nossa
              essência: resistência, inovação e confiança.
            </p>

            <p className="border-l-4 border-orange-500 bg-orange-50 p-6 font-semibold italic text-slate-800">
              Cada telha que sai da nossa produção carrega um propósito:
              proteger sonhos, cobrir histórias e garantir a tranquilidade
              de quem confia no nosso trabalho.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionTitle
          badge="Nossos valores"
          title="O que construímos junto com nossos clientes"
          description="Nossa história continua sendo construída todos os dias através da qualidade dos nossos produtos e do compromisso com cada obra."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-bold text-slate-900">
              Qualidade
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Fabricamos nossos produtos com atenção aos detalhes e
              compromisso com a qualidade.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-slate-900">
              Confiança
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Construímos relacionamentos duradouros através de
              responsabilidade, transparência e bom atendimento.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-slate-900">
              Compromisso
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Cada obra é tratada com seriedade, desde o orçamento até a
              entrega e instalação.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900">
            Faça parte da nossa história
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Conte para nossa equipe o que você precisa para sua obra.
            Estamos prontos para ajudar.
          </p>

          <div className="mt-8">
            <WhatsAppButton text="Falar com nossa equipe" />
          </div>
        </div>
      </Section>
    </main>
  );
}