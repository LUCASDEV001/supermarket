import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="p-3 pt-36 flex items-center pb-28">
      <section className=" container mx-auto">
        <div>
          <h2 className=" text-center font-sans text-sky-500 text-xl md:text-[28px] font-bold">
            NOSSA HISTÓRIA
          </h2>
          <div className="border-b mt-5 w-4/5 mx-auto"></div>
        </div>
        <div className="lg:flex justify-center text-center lg:text-start ">
          <div className="lg:ml-32">
            <p className="px-10 lg:px-0 lg:w-4/5 md:text-justify mt-5 md:mt-16 mb-10 text-gray-500">
              Bem-vindo ao <span className="text-sky-500">Supermercantil</span>,
              o seu destino de compras de confiança, onde a qualidade e a
              conveniência se encontram. No Supermercantil, nossa missão é
              proporcionar uma experiência de compras excepcional, com uma ampla
              variedade de produtos de alta qualidade e um atendimento de
              excelência aos nossos clientes. Fundado em 2015, o Supermercantil
              se tornou uma parte essencial da comunidade, atendendo às
              necessidades de famílias e indivíduos em todo o país.
            </p>
            <h2 className="text-sky-500 font-semibold">O que nos torna especiais:</h2>
            <p className="px-10 lg:px-0 lg:w-4/5 md:text-justify my-6 text-gray-500">
              <span className="text-green-500 font-semibold">Variedade Inigualável:</span> No
              Supermercantil, acreditamos que a diversidade é a chave para
              atender às diferentes necessidades dos nossos clientes. Oferecemos
              uma vasta gama de produtos, desde alimentos frescos e produtos de
              mercearia até produtos de limpeza e utensílios domésticos. Você
              encontrará tudo o que precisa em um único local.
            </p>
            <p className="px-10 lg:px-0 lg:w-4/5 text-justify my-6 text-gray-500">
              <span className="text-green-500 font-semibold">Qualidade Garantida:</span> Nosso
              compromisso com a qualidade é inabalável. Trabalhamos em estreita
              colaboração com fornecedores confiáveis para garantir que todos os
              produtos que oferecemos atendam aos mais altos padrões de
              qualidade.
            </p>
            <p className="px-10 lg:px-0 lg:w-4/5 md:text-justify my-6 text-gray-500">
              <span className="text-green-500 font-semibold">Preços Competitivos:</span> No
              Supermercantil, acreditamos que todos merecem acesso a produtos de
              qualidade a preços acessíveis. Estamos empenhados em oferecer
              preços competitivos e promoções regulares para economizar o seu
              dinheiro.
            </p>
            <p className="px-10 lg:px-0 lg:w-4/5 md:text-justify my-6 text-gray-500">
              <span className="text-green-500 font-semibold">
                Atendimento Excepcional ao Cliente:
              </span>{" "}
              Nossos funcionários estão aqui para tornar a sua experiência de
              compras agradável e sem complicações. Eles estão disponíveis para
              ajudar, responder a perguntas e fornecer orientação sempre que
              necessário.
            </p>
            <p className="px-10 lg:px-0 lg:w-4/5 md:text-justify my-6 text-gray-500">
              <span className="text-green-500 font-semibold">
                Compromisso com a Comunidade:
              </span>{" "}
              Somos mais do que apenas um supermercado. No Supermercantil, temos
              orgulho em apoiar a nossa comunidade local através de várias
              iniciativas, desde programas de doação de alimentos até a promoção
              de produtos locais.
            </p>
          </div>
          <div className="my-16 lg:mr-32">
            <Image
              width={3000}
              height={3000}
              src="/supermarket-inside.jpg"
              className="rounded-full w-[300px] md:w-[400px] lg:w-[3000px] mx-auto  "
              alt=""
            ></Image>
            <Image
              width={3000}
              height={3000}
              src="/supermarket-inside-2.jpg"
              className="rounded-full mt-10 w-[300px] md:w-[400px] lg:w-[3000px] mx-auto "
              alt=""
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
