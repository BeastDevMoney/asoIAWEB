"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Flecha from "../../../../public/flechaSeccion1.png";
import mano from "../../../../public/manoPrototipoSeccion1.png";
import fondo from "../../../../public/fondoSeccion1.png";
import ChatSeccion1 from './ChatSeccion1';


export default function Secc1() {
    return (
        <section className="relative">
            <div className="relative w-full">
                <Image
                    src={fondo}
                    alt="Fondo sección 1"
                    className="w-full h-auto"
                    priority
                />
                <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-between">
                    <div>
                        <motion.h1
                            className="ml-16 mt-10 w-64 text-white font-bold text-5xl text-left font-poppins"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            La mejor Asociación de Inteligencia Artificial de España
                        </motion.h1>
                        <motion.h4
                            className="ml-16 mt-10 w-[17.1rem] text-white font-medium leading-6 tracking-widest text-xl text-left font-spaceMono"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Acercando la inteligencia artificial a la sociedad, con compromiso y propósito
                        </motion.h4>
                        <motion.div
                            className="ml-16 mt-6"
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Image
                                src={Flecha}
                                alt="Flecha indicadora"
                                width={100}
                                height={100}
                                className="w-auto h-auto"
                            />
                        </motion.div>
                    </div>
                    <div className="mr-16 mt-10">
                        <ChatSeccion1 />
                    </div>
                </div>
                <Image
                    src={mano}
                    alt="Mano prototipo"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-[80%] z-20"
                    priority
                />
            </div>


        </section>
    );
}