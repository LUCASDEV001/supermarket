import React from "react";
import { AiTwotoneCustomerService } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-green-100 text-center text-green-600 dark:bg-green-600 dark:text-green-200 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:mx-20 ">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <AiTwotoneCustomerService className="mr-1 h-5 w-5" />
              Central de Atendimento
            </h6>
            <p>
              Em caso de dúvidas, sugestões ou reclamações entre em contato
              pelos números:
            </p>
            <div className="pt-3">
              <p>
                (11) 2548-6476 -{" "}
                <span className="font-bold">Supermercantil</span>
              </p>
              <p className="pt-1">
                (11) 93588-3301 - <span className="font-bold">Whatsapp</span>
              </p>
            </div>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Outras Opções
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-green-600 dark:text-green-200">
                Formas de Pagamento
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-green-600 dark:text-green-200">
                Ifood
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-green-600 dark:text-green-200">
                Ofertas
              </a>
            </p>
            
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Links Úteis
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-green-600 dark:text-green-200">
                Início
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-green-600 dark:text-green-200">
                Serviços
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-green-600 dark:text-green-200">
                História
              </a>
            </p>
            <p>
              <a href="#!" className="text-green-600 dark:text-green-200">
                Contato
              </a>
            </p>
          </div>

      
        </div>
      </div>

      <div className="bg-green-200 p-6 text-center dark:bg-green-700">
        <span>© 2023 Todos os Direitos Reservados • </span>
        <a
          className="font-semibold text-green-600 dark:text-green-400"
          href="#"
        >
          Supermercantil
        </a>
      </div>
    </div>
  );
}

export default Footer;
