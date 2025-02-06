import Image from "next/image";
import PrimerEvento from "../../../../public/fotoClaseEvento.png";
import EventoOpenSource from "../../../../public/fotoEventoOpensource.png";
import EventoOpenMic from "../../../../public/fotoEventoOpenMic.png";
import EventoClaseVertical from "../../../../public/fotoClaseVerticalEvento.png";

export default function Secc2() {
    return (
        <section className="w-screen h-screen bg-gradient-to-b from-[#A100FF] to-[#22F4FD]">
            <h3 className="pt-12 text-center text-black font-bold text-4xl font-poppins">¿Todavía no has ido a nuestros eventos?</h3>
            <Image alt="foto-principal-evento" src={PrimerEvento} />
            <h4 className="pt-12 text-center text-black font-bold text-4xl font-poppins">Eventos para todos los públicos</h4>
            <div className=" grid grid-cols-3">
                <Image className="col-start-1 col-end-3 h-[50px] w-[50px]" alt="foto-evento-opensource" src={EventoOpenSource} />
                <Image className="col-start-2 col-end-3 h-[50px] w-[50px]" alt="foto-evento-openmic" src={EventoOpenMic} />
                <Image className="col-end-7 col-span-2 h-[50px] w-[50px]" alt="foto-vertical-evento" src={EventoClaseVertical} />
            </div>

        </section >
    );
}