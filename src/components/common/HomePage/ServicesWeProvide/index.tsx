import { PiVibrate, PiTelevisionSimple } from "react-icons/pi";
import { HiOutlineServer } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";

export function ServiceWeProvide() {
    return (
        <div className="w-full h-[600px] flex flex-col items-center justify-center gap-5">
            <h1 className="text-gray-200 text-3xl">Serviços que Prestamos</h1>
            <p className="text-center w-[35%] text-gray-200 text-[14px]">Aqui estão alguns serviços que a empresa, PIA - Pagamentos Institucionais Angolano, oferece para facilitar os processos de pagamento para instituições educacionais.</p>
            <div className="w-full flex flex-row gap-5 px-40 mt-10 grelha">
                <div className="w-full border border-gray-400 h-[280px] flex flex-col items-center justify-center text-gray-200 gap-3 p-2">
                    <MdOutlinePayment className="text-5xl" />
                    <h2 className="text-lg text-center px-5">Pagamento de Mensalidade</h2>
                    <p className="text-center text-[13px]">Faça o pagamento da mensalidade do seu educando sem sair sa sua zona de conforto.</p>
                    <button className="py-2 px-4 rounded-sm uppercase mt-3">Saiba mais</button>
                </div>
                <div className="w-full border border-gray-400 h-[280px] flex flex-col items-center justify-center text-gray-200 gap-3 p-2">
                    <PiVibrate className="text-5xl" />
                    <h2 className="text-lg text-center">Contacto com os Encarregados</h2>
                    <p className="text-center text-[13px]">Economize dinheiro contactando aos seus clientes de forma rápida e segura.</p>
                    <button className="py-2 px-4 rounded-sm uppercase mt-5">Saiba mais</button>
                </div>
                <div className="w-full border border-gray-400 h-[280px] flex flex-col items-center justify-center text-gray-200 gap-3 p-2">
                    <PiTelevisionSimple className="text-5xl" />
                    <h2 className="text-lg text-center px-10">Gerenciamento Escolar</h2>
                    <p className="text-center text-[13px]">Faça a gestão completa da sua instituição escolar utilizando a plataforma PCO.</p>
                    <button className="py-2 px-4 rounded-sm uppercase mt-5">Saiba mais</button>
                </div>
                <div className="w-full border border-gray-400 h-[280px] flex flex-col items-center justify-center text-gray-200 gap-3 px-10">
                    <HiOutlineServer className="text-5xl" />
                    <h2 className="text-lg text-center">Segurança de Dados</h2>
                    <p className="text-center text-[13px]"> Implementação de medidas de segurança robustas para proteger as informações financeiras.</p>
                    <button className="py-2 px-4 rounded-sm uppercase mt-5">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}