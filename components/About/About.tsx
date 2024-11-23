"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import Image from 'next/image'
import Javascript from "../../public/about/1.png"
import Typescript from "../../public/about/2.png"
import Sass from "../../public/about/3.png"
import Git from "../../public/about/4.png"
import Reacticon from "../../public/about/5.png"
import Nexticon from "../../public/about/6.png"
import Solidity from "../../public/about/7.png"

function About() {

  const logos = [
    {id: 1, src: Javascript, alt: "JavaScript"},
    {id: 2, src: Typescript, alt: "TypeScript"},
    {id: 3, src: Sass, alt: "Sass"},
    {id: 4, src: Git, alt: "Git"},
    {id: 5, src: Reacticon, alt: "React.js"},
    {id: 6, src: Nexticon, alt: "Next.js"},
    {id: 7, src: Solidity, alt: "Solidity"}
];

  return (
    <section className='about' id="about">
      <div>
      <div className='slider'>
                            <Swiper
                                spaceBetween={10}
                                pagination={ false }
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 0, // Sin pausa entre diapositivas
                                    disableOnInteraction: false, // Tiempo total de recorrido completo
                                }}
                                speed={5000} // Velocidad del deslizamiento continuo
                                breakpoints={{
                                    320: { slidesPerView: 3 },
                                    724: { slidesPerView: 3 },
                                    900: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                    1200: { slidesPerView: 4},
                                    1324: { slidesPerView: 4 },
                                }}
                                loop
                            >
                                {logos.map((l) => (
                                    <SwiperSlide key={l.id}>
                                        
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1}}
                                            transition={{ duration: 2.5 }}
                                        >
                                            <div className="iconstack">

                                            <div className="icon-wrap">
                                                <Image
                                                    className="iconlogo"
                                                    width={450}
                                                    height={260}
                                                    src={l.src}
                                                    alt={l.alt}
                                                />
                                            </div>
                                            </div>
                                        </motion.div>
                                        
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='slider'>
                            <Swiper
                                spaceBetween={10}
                                pagination={ false }
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 0, // Sin pausa entre diapositivas
                                    disableOnInteraction: false, // Tiempo total de recorrido completo
                                }}
                                speed={6000} // Velocidad del deslizamiento continuo
                                style={{ direction: "rtl" }}
                                breakpoints={{
                                    320: { slidesPerView: 3 },
                                    724: { slidesPerView: 3 },
                                    900: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4},
                                    1200: { slidesPerView: 4 },
                                    1324: { slidesPerView: 4 },
                                }}
                                loop
                            >
                                {logos.map((l) => (
                                    <SwiperSlide key={l.id}>
                                        
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1}}
                                            transition={{ duration: 2.5 }}
                                        >
                                            <div className="iconstack">

                                            <div className="icon-wrap">
                                                <Image
                                                    className="iconlogo"
                                                    width={450}
                                                    height={260}
                                                    src={l.src}
                                                    alt={l.alt}
                                                />
                                            </div>
                                            </div>
                                        </motion.div>
                                        
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='slider'>
                            <Swiper
                                spaceBetween={10}
                                pagination={ false }
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 0, // Sin pausa entre diapositivas
                                    disableOnInteraction: false, // Tiempo total de recorrido completo
                                }}
                                speed={8000} // Velocidad del deslizamiento continuo
                                style={{ direction: "rtl" }}
                                breakpoints={{
                                    320: { slidesPerView: 3 },
                                    724: { slidesPerView: 3 },
                                    900: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                    1200: { slidesPerView: 4 },
                                    1324: { slidesPerView: 4 },
                                }}
                                loop
                            >
                                {logos.map((l) => (
                                    <SwiperSlide key={l.id}>
                                        
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1}}
                                            transition={{ duration: 2.5 }}
                                        >
                                            <div className="iconstack">

                                            <div className="icon-wrap">
                                                <Image
                                                    className="iconlogo"
                                                    width={450}
                                                    height={260}
                                                    src={l.src}
                                                    alt={l.alt}
                                                />
                                            </div>
                                            </div>
                                        </motion.div>
                                        
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
            <div className="textZone">
                <h3>
                Filosofando con: Mi código, mis gatos y mis adorables pepinos🥒
                </h3>
                <p>
                A veces me pregunto si la vida es como mi código: lleno de errores que solo descubro cuando es demasiado tarde. Mi gato, en su infinita sabiduría, parece saber la respuesta, aunque prefiere mirarme con desdén desde lo alto de mi escritorio, derribando cuidadosamente cualquier esperanza de orden. Lo admiro. Es el verdadero filósofo: implacable, silencioso y siempre cuestionando mi autoridad.
                </p>
                <p>
                Y luego están los pepinos. Ah, los pepinos, esos comediantes verdes que nunca fallan. “Cual es la mejor verdura para la memoria? -El pepino. Mi tio me metio uno en el culo cuando tenía 5 años y todavia no me olvido.” Ese es el tipo de humor que me mantiene cuerdo entre bugs y deadlines. La programación, como la vida, es un chiste de pepinos: a veces agrio, a veces crujiente, pero siempre inesperado.
                </p>
            </div>
      </div>
    </section>
  )
}

export default About