import PageHeader from "@/components/common/page-header";
import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import Card from "@/components/common/card";
import WhatsAppButton from "@/components/common/whatsapp-button";
import { company } from "@/data/company";
import LocationSection from "@/components/common/location-section";

export default function ContatoPage() {
  return (
    <main>
      <PageHeader
        title="Entre em Contato"
        description="Solicite seu orçamento de telhas, calhas, rufos ou instalação. Nossa equipe está pronta para atender sua obra."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              badge="Fale conosco"
              title="Vamos conversar sobre sua obra?"
              description="Envie as informações da sua necessidade e nossa equipe poderá orientar você sobre materiais, medidas, entrega e instalação."
            />

            <div className="mt-10 space-y-4">
              <Card>
                <h3 className="font-bold text-slate-900">
                  Telefone
                </h3>

                <p className="mt-2 text-slate-600">
                  {company.phone}
                </p>
              </Card>

              <Card>
                <h3 className="font-bold text-slate-900">
                  E-mail
                </h3>

                <p className="mt-2 text-slate-600">
                  {company.email}
                </p>
              </Card>

              <Card>
                <h3 className="font-bold text-slate-900">
                  Região de atendimento
                </h3>

                <p className="mt-2 text-slate-600">
                  {company.cities.join(" • ")}
                </p>
              </Card>
            </div>

            <div className="mt-8">
              <WhatsAppButton
                text="Falar pelo WhatsApp"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-black text-slate-900">
              Solicite um orçamento
            </h2>

            <p className="mt-3 text-slate-600">
              Preencha os dados abaixo e entraremos em contato.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Telefone / WhatsApp
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Como podemos ajudar?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Conte um pouco sobre sua obra..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Enviar solicitação
              </button>
            </form>
          </Card>
        </div>
      </Section>
      <LocationSection />
    </main>
  );
}