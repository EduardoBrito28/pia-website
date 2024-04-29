import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function StapSecand() {
  return (
    <div className="p-5 text-black">
      <h3 className="text-black text-[12pt] font-normal">Informações de acesso do administrador da instituição</h3>
      <div className="flex items-center w-full border-b border-[#00A3E6] mt-[15px] p-1">
        <FaUser className="text-gray-500 text-xl" />
        <input className="text-[12pt] border-0 outline-none p-3 rounded-md w-full" type="text" placeholder="Nome do representante da instituição" />
      </div>
      <div className="flex items-center w-full border-b border-[#00A3E6] mt-[15px] p-1">
        <MdEmail className="text-gray-500 text-2xl" />
        <input className="text-[12pt] border-0 outline-none p-3 rounded-md w-full" type="text" placeholder="E-mail" />
      </div>
      <div className="flex items-center w-full border-b border-[#00A3E6] mt-[15px] p-1">
        <FaLock className="text-gray-500 text-xl" />
        <input className="text-[12pt] border-0 outline-none p-3 rounded-md w-full" type="password" placeholder="Palavra pass" />
      </div>
    </div>
  );
}