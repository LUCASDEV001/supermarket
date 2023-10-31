"use client";
import Image from "next/image";
import { ImPriceTag } from "react-icons/im";
import { LuChefHat } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";

export default function Home() {
  const slides = [
    {
      image: "/products/leite.png",
      description: "Leite Integral Ninho ou Desnatado Molico • 1L",
      price: "R$ 3.67",
    },
    {
      image: "/products/salsicha.png",
      description: "Salsicha Hot Dog Perdigão ou Sadia a Granel • KG",
      price: "R$ 7,97",
    },
    {
      image: "/products/linguica.png",
      description: "Linguiça Calabresa Seara a Granel • KG",
      price: "R$ 15,98",
    },
    {
      image: "/products/carne.png",
      description: "Alcatra Bovina com Maminha Minerva ou Friboi • KG",
      price: "R$ 26.98",
    },
    {
      image: "/products/margarina1.png",
      description: "Margarina Claybom ou Cremosy • 500g",
      price: "R$ 3.97",
    },
    {
      image: "/products/lava-roupas-omo.png",
      description: "Lava Roupas Líquido Omo • 3L",
      price: "R$ 28.90",
    },
    {
      image: "/products/lava-roupas-tixan.png",
      description: "Lava Roupas em Pó Tixan Primavera • 2.2Kg ",
      price: "R$ 15.80",
    },
  ];

  return (
    <div>
      <section>
        <div className="p-3 pt-28 justify-around flex items-center container mx-auto">
          <div className="hidden md:block">
            <Image
              width={150}
              height={150}
              alt="carrinho-de-compras"
              src="/shopping-cart.png"
            />
          </div>

          <form
            action="#"
            method="GET"
            className="w-2/4 h-12 border border-gray-300 placeholder-gray-500 text-gray-700 px-4 rounded-lg relative"
          >
            <input
              type="search"
              placeholder="O que procura?"
              className="w-full h-full pl-7 rounded-lg outline-none "
            />
            <div className="absolute left-3 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </form>

          <div className="hidden md:block">
            <Image
              width={150}
              height={150}
              alt="carrinho-de-compras"
              src="/man-with-shopping-cart.png"
            />
          </div>
        </div>
      </section>

      <section className="mt-5 bg-gradient-to-l from-green-600 to-green-900 p-6">
        <div>
          <ul className="flex justify-center gap-16 text-white font-bold">
            <Link href="/historia">
              <li>
                <AiOutlineShoppingCart className="w-7 h-7 mx-auto" />
                <div> Supermercantil</div>
              </li>
            </Link>

            <Link href="#ofertas">
              <li>
                <ImPriceTag className="w-7 h-7 mx-auto" />
                Super Ofertas
              </li>
            </Link>
          </ul>
        </div>
      </section>

      <section>
        <div className="flex cursor-pointer justify-center bg-gradient-to-bl from-yellow-300 via-orange-400 to-orange-600">
          <Image
            width={1920}
            height={867}
            alt="ofertas-da-semana"
            src="/grandes-ofertas.png"
            className="md:w-[800px] md:h-[360px] bg-cover select-none pointer-events-none"
          />
        </div>

        <div className="pt-14">
          <h1
            id="ofertas"
            className="flex font-sans text-center justify-center text-xl md:text-[28px] font-bold text-red-600"
          >
            OFERTAS PARA LIMPAR O ESTOQUE!
          </h1>
        </div>

        <div className="pt-14 mx-auto md:px-32 container border mt-5 shadow-md cursor-pointer swiper-container">
          <Swiper
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            slidesPerView={5}
            // Adicione breakpoints para ajustar o número de slides visíveis em diferentes tamanhos de tela
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded shadow-lg">
                  <Image
                    src={slide.image}
                    alt="Imagem do Produto"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                  <h2 className="flex text-center h-16 pt-5 text-gray-700 font-semibold">
                    {slide.description}
                  </h2>
                  <p className="text-red-600 text-lg font-bold pt-12">
                    {slide.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="pt-20 mb-20">
        <h2 className="md:w-2/5 mx-auto font-sans text-center text-xl w-3/4 md:text-[28px] font-bold text-sky-800">
          SIGA-NOS EM NOSSAS REDES SOCIAIS E{" "}
          <span className="text-red-600">FIQUE POR DENTRO</span> DAS NOVIDADES!
        </h2>
        <div className="pt-10">
          <a className="flex items-center mx-auto justify-center ">
            <Image
              src="/supermercantil.png"
              alt="logo"
              width={150}
              height={150}
              className="w-20 select-none cursor-pointer"
            />
          </a>
          <h2 className="mx-auto text-center justify-center font-bold text-sky-900">
            <a href="https://www.instagram.com/" target="_blank">
              @supermercantil
            </a>
          </h2>
          <div className="mx-auto text-center justify-center pt-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className=" bg-green-700 hover:bg-sky-800 duration-200 cursor-pointer px-4 py-3 rounded-lg font-bold text-white"
            >
              Seguir
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
