
export function StapStart() {
  return (
    <div className="p-5 text-black">
      <h3 className="text-[#111] text-base font-normal">Para iniciar o processo de abertura de conta, precisamos de validar o seu código de adesão.</h3>
      <div className="flex items-center w-full border-b border-[#00A3E6] mt-4">
        <input className="text-[12pt] border-0 outline-none p-3 rounded-md w-full" type="text" placeholder="Código de adesão da sua instituição" />
      </div>
    </div>
  );
}