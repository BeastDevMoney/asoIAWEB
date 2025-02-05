import Image from "next/image";
import { motion } from "framer-motion";
import romano from "../../../../public/iconoLuchadorRomanoSeccion1.png";
import gafas from "../../../../public/iconoGafasSeccion1.png";

const mensajes = [
    { id: 1, texto: "¿Qué es AIDA?", emisor: "romano" },
    { id: 2, texto: "AIDA es la Asociación de Inteligencia Artificial más grande de España", emisor: "gafas" },
    { id: 3, texto: "¿Qué hacéis en AIDA?", emisor: "romano" },
    { id: 4, texto: "Organizamos eventos, talleres y proyectos relacionados con IA", emisor: "gafas" },
    { id: 5, texto: "¿Puedo unirme?", emisor: "romano" },
    { id: 6, texto: "¡Claro! Todos son bienvenidos", emisor: "gafas" },
    { id: 7, texto: "¿Qué beneficios tiene?", emisor: "romano" },
    { id: 8, texto: "Acceso a recursos, networking y formación en IA", emisor: "gafas" },
    { id: 9, texto: "¡Genial! ¿Dónde me apunto?", emisor: "romano" }
];

export default function ChatSeccion1() {
    return (
        <div className="w-96 space-y-4 p-4">
            {mensajes.map((mensaje, index) => (
                <motion.div
                    key={mensaje.id}
                    className={`flex items-center gap-2 ${mensaje.emisor === 'gafas' ? 'flex-row-reverse' : 'flex-row'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                    <Image
                        src={mensaje.emisor === 'romano' ? romano : gafas}
                        alt={`Icono ${mensaje.emisor}`}
                        width={24}
                        height={24}
                        className="w-8 h-8"
                    />
                    <div
                        className={`rounded-xl p-3 max-w-[80%] ${mensaje.emisor === 'gafas'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-800'
                            }`}
                    >
                        <p className="text-sm">{mensaje.texto}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
} 