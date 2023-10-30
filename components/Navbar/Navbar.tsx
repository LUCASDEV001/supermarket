"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full z-10 flex items-center justify-between text-center bg-green-700 p-3">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="md:mx-5"
        />
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:gap-10 mr-20 text-white font-bold hidden`}
      >
        <Link href="/">
          <li className="flex gap-1 hover:text-green-400 cursor-pointer duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <div>Início</div>
          </li>
        </Link>

        <li className="hidden lg:block">|</li>

        <Link href="/servicos">
          <li className="flex gap-1 hover:text-green-400  cursor-pointer duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <div>Serviços</div>
          </li>
        </Link>

        <li className="hidden lg:block">|</li>

        <Link href="/historia">
          <li className="flex gap-1 hover:text-green-400  cursor-pointer duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <div>História</div>
          </li>
        </Link>

        <li className="hidden lg:block">|</li>

        <Link href="/contato">
          <li className="flex gap-1 hover:text-green-400  cursor-pointer duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <div>Contato</div>
          </li>
        </Link>
        <li>
          <a className="bg-sky-800  hover:bg-sky-600 duration-200 cursor-pointer px-3 py-2 rounded-md font-bold text-white">
            Ofertas
          </a>
        </li>
      </ul>

      <button
        onClick={toggleMenu}
        className="block lg:hidden text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h18M3 6h18M3 18h18"
          />
        </svg>
      </button>

      {menuOpen && (
        <div className="lg:hidden fixed top-23 left-0 w-full h-80 text-xl bg-white shadow-md">
          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="text-black cursor-pointer absolute top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="my-5">
              <li className="my-4 ">
                <a
                  className="text-sky-900 font-bold hover:text-sky-600 duration-200"
                  href="#"
                >
                  Início
                </a>
                <div className="border-b my-3"></div>
              </li>
              <li className="my-4 ">
                <a
                  className="text-sky-900 font-bold hover:text-sky-600 duration-200"
                  href="#"
                >
                  Serviços
                </a>
                <div className="border-b my-3"></div>
              </li>
              <li className="my-4 ">
                <a
                  className="text-sky-900 font-bold hover:text-sky-600 duration-200"
                  href="#"
                >
                  História
                </a>
                <div className="border-b my-3"></div>
              </li>
              <li className="my-4 ">
                <a
                  className="text-sky-900 font-bold hover:text-sky-600 duration-200"
                  href="#"
                >
                  Contato
                </a>
                <div className="border-b my-3"></div>
              </li>
              <li className="my-5">
                <a
                  className="bg-green-600 hover:bg-green-800 duration-200 shadow-md cursor-pointer px-3 py-2 rounded-md font-bold text-white"
                  href="#"
                >
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
