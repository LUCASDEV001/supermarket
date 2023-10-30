import React from "react";

function page() {
  return (
    <div className="p-3 pt-36 pb-28">
      <section className="mx-auto">
        <div>
          <h2 className=" text-center font-sans text-sky-500 text-xl md:text-[28px] font-bold">
            ENTRE EM CONTATO CONOSCO
          </h2>
          <div className="border-b mt-5 w-4/5 lg:w-2/5 mx-auto"></div>
          <p className="text-center text-sky-500 pt-2">
            Envie-nos uma mensagem
          </p>
        </div>

        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
          <form action="#" className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-green-500">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 dark:placeholder-gray-400 "
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-green-500 ">
                Telefone
              </label>
              <input
                type="tel"
                id="subject"
                className="block p-3  text-sm text-gray-900 outline-none rounded-lg border border-gray-300 shadow-sm"
                placeholder="Ex: (11) 98889-8888"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-green-500 ">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 outline-none rounded-lg border border-gray-300 shadow-sm"
                placeholder="Qual sua dúvida?"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-green-500 ">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 outline-none"
                placeholder="Digite sua mensagem aqui"
                required minLength={10}
              ></textarea>
            </div>
            <p className="text-sm text-gray-500">
              Os dados coletados neste formulário serão tratados para que
              possamos atender suas demandas e retornar seu contato.
            </p>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 duration-200 outline-none"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default page;
