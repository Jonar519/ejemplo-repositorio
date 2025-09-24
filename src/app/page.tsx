"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeProject, setActiveProject] = useState(0);
  const [activeTestimonio, setActiveTestimonio] = useState(0);

  const proyectos = [1, 2, 3, 4, 5];
  const testimonios = [1, 2, 3, 4];

  const next = (setFn: any, arrLength: number) =>
    setFn((prev: number) => (prev + 1) % arrLength);

  const prev = (setFn: any, arrLength: number) =>
    setFn((prev: number) => (prev === 0 ? arrLength - 1 : prev - 1));

  return (
    <main className="bg-black text-white font-[Poppins] selection:bg-green-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-xl border-b border-gray-800 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 animate-text">
            Mi Portafolio
          </h1>
          <div className="hidden md:flex space-x-8 text-sm uppercase font-semibold tracking-wide">
            {["inicio","acerca","proyectos","testimonios","experiencia","extra","contacto"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative group transition-colors"
              >
                <span className="text-gray-300 group-hover:text-green-400">{section}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-green-400 text-2xl"
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-700 px-6 py-4 space-y-3">
            {["inicio","acerca","proyectos","testimonios","experiencia","extra","contacto"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="inicio"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <h2 className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight tracking-wide bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-textGlow">
          Bienvenido a mi Portafolio
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl animate-fadeIn">
          Estudiante de Ingeniería de Software | Apasionado por el desarrollo
          web, el diseño de interfaces y la innovación tecnológica ⚡
        </p>
        <button className="mt-10 px-8 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,197,94,0.6)]">
          Ver más
        </button>
      </section>

      {/* Acerca */}
      <section
        id="acerca"
        className="min-h-screen px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <Image
          src="/perfil.jpg"
          alt="Mi Foto"
          width={500}
          height={500}
          className="rounded-2xl border border-green-400 shadow-[0_0_35px_rgba(34,197,94,0.7)] hover:scale-105 transition-transform"
        />
        <div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Acerca de mí
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Soy un estudiante de Ingeniería de Software con gran interés en el
            desarrollo de aplicaciones web, diseño UX/UI y tecnologías modernas
            como React, Next.js y Tailwind CSS. Me encanta crear proyectos que
            mezclen creatividad, funcionalidad y estilo gamer.
          </p>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="min-h-screen px-6 py-20 bg-black">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-12">
          Mis Proyectos
        </h2>
        <div className="relative max-w-6xl mx-auto flex items-center justify-center">
          <button
            onClick={() => prev(setActiveProject, proyectos.length)}
            className="absolute left-0 bg-purple-600/70 hover:bg-purple-500 text-white p-4 rounded-full z-30 shadow-lg"
          >
            ◀
          </button>
          <div className="flex space-x-6 overflow-hidden">
            {proyectos.map((p, index) => (
              <div
                key={p}
                className={`transition-all duration-500 ease-in-out transform cursor-pointer
                  ${
                    index === activeProject
                      ? "scale-105 z-20 shadow-[0_0_30px_rgba(168,85,247,0.9)]"
                      : "scale-90 opacity-50 z-10"
                  }
                  hover:scale-110 hover:shadow-[0_0_35px_rgba(168,85,247,1)]
                  bg-gradient-to-b from-gray-900 to-black border border-purple-500 rounded-xl overflow-hidden`}
              >
                <Image
                  src={`/proyecto${p}.jpg`}
                  alt={`Proyecto ${p}`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Proyecto {p}
                  </h3>
                  <p className="text-gray-400">
                    Descripción breve del proyecto {p}, destacando su innovación
                    y uso de tecnologías modernas.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => next(setActiveProject, proyectos.length)}
            className="absolute right-0 bg-purple-600/70 hover:bg-purple-500 text-white p-4 rounded-full z-30 shadow-lg"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="min-h-screen px-6 py-20">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-12">
          Testimonios
        </h2>
        <div className="relative max-w-6xl mx-auto flex items-center justify-center">
          <button
            onClick={() => prev(setActiveTestimonio, testimonios.length)}
            className="absolute left-0 bg-yellow-600/70 hover:bg-yellow-500 text-white p-4 rounded-full z-30 shadow-lg"
          >
            ◀
          </button>
          <div className="flex space-x-6 overflow-hidden">
            {testimonios.map((t, index) => (
              <div
                key={t}
                className={`transition-all duration-500 ease-in-out transform
                  ${
                    index === activeTestimonio
                      ? "scale-105 z-20 shadow-[0_0_30px_rgba(234,179,8,0.9)]"
                      : "scale-90 opacity-50 z-10"
                  }
                  hover:scale-110 hover:shadow-[0_0_35px_rgba(234,179,8,1)]
                  bg-gradient-to-b from-gray-900 to-black border border-yellow-500 rounded-xl p-6`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={`/testimonio${t}.jpg`}
                    alt={`Persona ${t}`}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-yellow-400"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-300">
                      Persona {t}
                    </h3>
                    <p className="text-sm text-gray-400">Cargo / Rol</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  “El trabajo refleja profesionalismo, innovación y un estilo
                  único. Muy recomendable.”
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => next(setActiveTestimonio, testimonios.length)}
            className="absolute right-0 bg-yellow-600/70 hover:bg-yellow-500 text-white p-4 rounded-full z-30 shadow-lg"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Experiencia */}
      <section
        id="experiencia"
        className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
          Experiencia
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-black/70 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg hover:translate-x-2 transition-transform">
            <h3 className="text-2xl font-bold text-blue-300">
              Universidad XYZ
            </h3>
            <p className="text-gray-400 text-sm mb-2">2022 - Presente</p>
            <p className="text-gray-300 text-lg">
              Estudiante de Ingeniería de Software.
            </p>
          </div>
          <div className="bg-black/70 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg hover:translate-x-2 transition-transform">
            <h3 className="text-2xl font-bold text-blue-300">Empresa ABC</h3>
            <p className="text-gray-400 text-sm mb-2">2023</p>
            <p className="text-gray-300 text-lg">
              Prácticas en desarrollo web con React y Node.js.
            </p>
          </div>
        </div>
      </section>

      {/* Extra */}
      <section id="extra" className="min-h-screen px-6 py-20 bg-black">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-12">
          Logros Personales
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-black/70 border border-green-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-green-300 mb-3">
              Hackathon 2024
            </h3>
            <p className="text-gray-300">
              Participación destacada en proyectos de innovación tecnológica.
            </p>
          </div>
          <div className="bg-black/70 border border-green-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-green-300 mb-3">
              Reconocimiento Académico
            </h3>
            <p className="text-gray-300">
              Premiado por excelencia en programación y desarrollo web.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="min-h-screen px-6 py-20">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-12">
          Contacto
        </h2>
        <form className="max-w-3xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-4 rounded-lg bg-black/70 border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-4 rounded-lg bg-black/70 border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full p-4 rounded-lg bg-black/70 border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-pink-400 to-red-500 text-black font-bold rounded-full hover:scale-110 transition-transform shadow-[0_0_25px_rgba(236,72,153,0.6)]"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2025 Mi Portafolio | Estilo Gamer-Tech ⚡ Inspirado en Samsung
      </footer>
    </main>
  );
}
