"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  {
    ques: "¿Qué es Netflix?",
    ans: `Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, a un costo mensual muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!`,
  },
  {
    ques: "¿Cuánto cuesta Nexflix?",
    ans: `Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $99 hasta $299 al mes. Sin costos adicionales ni contratos.`,
  },
  {
    ques: "¿Qué puedo ver en Netflix?",
    ans: `Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.`,
  },
  {
    ques: "¿Cómo cancelo?",
    ans: `Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.`,
  },
  {
    ques: "¿Es bueno Netflix para los niños?",
    ans: `La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.

    Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.`,
  },
];

function UnauthBanner({ router }) {
  return (
    <div className="h-[65vh] sm:h-[90vh] xl:h-[95vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ">
      <div
        className="bg-black bg-opacity-70 h-[100vh]
    "
      >
        <div className="flex items-center justify-between">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width={120}
            height={120}
            className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
            onClick={() => router.push("/")}
          />
          <div className="flex mr-4 sm:mr-10">
            <button
              onClick={() => signIn("github")}
              className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded"
            >
              Iniciar Sesion
            </button>
          </div>
        </div>
        <div className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[0%] font-medium">
          Disfruta de películas épicas, series exitosas y más, desde tan solo $99.
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
          Únete hoy. Cancela cuando quieras.
          </h2>
          <div className="flex  justify-center">
            <button
              onClick={() => signIn("github")}
              className="bg-red-600 hover:bg-[#e50914] p-4 rounded"
            >
              Inicia sesion para comenzar.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnauthPage() {
  const router = useRouter();
  const [showCurrentAns, setShowCurrentAns] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <main>
        <div className="bg-[#000000]">
          <UnauthBanner router={router} />
          <div className="border-b-8 border-gray-800 pb-8">
            <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-3 sm:mt-14">
              <h1 className="mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
                Preguntas frecuentes
              </h1>
              {questions.map((item, index) => (
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => setShowCurrentAns(showCurrentAns === index ? null : index)}
                    className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer"
                  >
                    <h2>{item.ques}</h2>
                    <PlusIcon className="h-7 w-7" color="white" />
                  </div>
                  {showCurrentAns === index && (
                    <div className="p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
                      {item.ans}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
