import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="p-3 pt-36 flex items-center pb-28 bg-gradient-to-tr from-gray-300 to bg-white">
      <section className="mx-auto">
        <div>
          <h2 className=" text-center font-sans text-sky-500 text-xl md:text-[28px] font-bold">
            FORMAS DE PAGAMENTO
          </h2>
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <h3 className="text-2xl font-bold text-green-600">Crédito</h3>
            <figure>
              <Image
                className="mt-3 mb-3"
                width={395}
                height={189}
                src="/cards/credito.png"
                alt=""
              />
              <figcaption className="text-xs md:w-[24rem] text-sky-800">
                Parcelamento para cartões de crédito nas bandeiras Visa e
                Mastercard é válido somente para valores acima de R$200,00 com
                parcelamento em até 2x sem juros.
              </figcaption>
            </figure>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">
              Convênio Alimentação
            </h3>
            <Image
              className="mt-3"
              width={395}
              height={239}
              src="/cards/alimentacao.png"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600">
              Carteira Digital
            </h3>
            <Image
              className="mt-3"
              width={554}
              height={39}
              src="/cards/digital.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">Débito</h3>
            <Image
              className="mt-3"
              width={391}
              height={63}
              src="/cards/debito.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
