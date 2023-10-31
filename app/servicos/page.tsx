import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="p-3 pt-36 flex items-center pb-28">
      <section className="mx-auto">
        <div>
          <h2 className=" text-center font-sans text-sky-500 text-xl md:text-[28px] font-bold">
            CONFIRA NOSSOS SERVIÇOS
          </h2>

          <div className="pt-10 cursor-pointer grid md:grid-cols-3 gap-10 md:gap-0 container ">
            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg md:w-4/5">
              <Link href="https://www.ifood.com.br/" target="_blank">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full"
                  src="/ifood.jpg"
                  alt="Ifood"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-sky-800">
                  Compre do conforto de sua casa
                </div>
              </div>
              <div className="px-6 pb-4">
                <Link
                  href="https://www.ifood.com.br/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 outline-none"
                >
                  Saiba mais
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg md:w-4/5">
              <Link href="/servicos/pagamentos">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full"
                  src="/cartoes.jpg"
                  alt="ilustração de cartões de crédito"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-sky-800">
                  Descubra nossas formas de pagamento
                </div>
              </div>
              <div className="px-6 pb-4">
                <Link
                  href="/servicos/pagamentos"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 outline-none"
                >
                  Saiba mais
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg md:w-4/5">
              <Link href="https://www.whatsapp.com/" target="_blank">
              <Image
                width={1000}
                height={1000}
                className="w-full"
                src="/whatsapp.jpg"
                alt="Sunset in the mountains"
              />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-sky-800">
                  Super ofertas via WhatsApp!
                </div>
              </div>
              <div className="px-6 pb-4">
                <Link
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 outline-none"
                >
                  Saiba mais
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
