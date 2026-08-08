import Container from "./container";
import WhatsAppButton from "./whatsapp-button";

const address =
  "Avenida Pacaembu, 836 - Jardim Paulista - Várzea Paulista - SP";

const mapsUrl =
  "https://maps.app.goo.gl/eEf4UszvsJMthaFg6";

export default function LocationSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
              Onde estamos
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Visite nossa loja
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nossa loja está localizada na Avenida Pacaembu, em Várzea
              Paulista. Para facilitar sua chegada, deixamos abaixo as
              principais referências e orientações de acesso.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-bold text-slate-900">
                  📍 Endereço
                </h3>

                <p className="mt-2 text-slate-600">
                  {address}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  ⛽ Ponto de referência
                </h3>

                <p className="mt-2 text-slate-600">
                  Posto de Combustível JP.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  🚗 Como chegar pelo centro
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Para quem vem do centro, descendo o viaduto pela Rua
                  Sorocaba, entre na primeira rua à direita. Siga em frente
                  e, no final da subida, entre à direita. Você estará na
                  Avenida Pacaembu. A loja fica aproximadamente 1 km à frente.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  🚗 Acesso pela Marginal
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Descendo o viaduto no sentido da Marginal, ao final da
                  rampa entre à direita, seguindo em direção à Avenida
                  Pacaembu. Para quem vem pela Rua Sorocaba, utilize a mesma
                  orientação, entrando desta vez na segunda rua à direita.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  🕐 Horário de atendimento
                </h3>

                <p className="mt-2 text-slate-600">
                  Segunda a sexta: 7h às 17h
                  <br />
                  Sábado: 7h às 12h
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Como chegar
              </a>

              <WhatsAppButton text="Falar com a loja" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
            <div className="flex min-h-[500px] items-center justify-center bg-slate-200 p-8 text-center">
              <div>
                <div className="text-5xl">📍</div>

                <h3 className="mt-4 text-2xl font-black text-slate-900">
                  Nossa loja
                </h3>

                <p className="mt-3 text-slate-600">
                  Avenida Pacaembu, 836
                  <br />
                  Jardim Paulista
                  <br />
                  Várzea Paulista - SP
                </p>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-blue-700 hover:underline"
                >
                  Abrir localização no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}