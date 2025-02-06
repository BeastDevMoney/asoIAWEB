import Image from "next/image";
import { motion } from "framer-motion";
import romano from "../../../../public/iconoLuchadorRomanoSeccion1.png";
import gafas from "../../../../public/iconoGafasSeccion1.png";

const mensajes = [
    { id: 1, texto: "Oye, has visto la AIA", emisor: "romano" },
    { id: 2, texto: "¿De que hablas?¿Qué es eso?", emisor: "gafas" },
    { id: 3, texto: "¿Cómo no lo sabes?", emisor: "romano" },
    { id: 4, texto: "¿Porqué debería saberlo?", emisor: "gafas" },
    { id: 5, texto: "Es la mejor ASO de la URJC", emisor: "romano" },
    { id: 6, texto: "¿Qué tiene de especial?", emisor: "gafas" },
    { id: 7, texto: "Enseñan sobre IA como ninguna", emisor: "romano" },
    { id: 9, texto: "Échale un vistazo a la web", emisor: "romano" },
    { id: 8, texto: "Lo acabo de ver, Qué locura.", emisor: "gafas" },
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