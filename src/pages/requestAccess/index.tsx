import { ChangeEvent, useState } from "react";
import Container from "../../components/shared/container";
import Header from "../../components/shared/header";
import { Link } from "react-router-dom";

export default function RequestAccess() {

    const [idUser, setidUser] = useState<number>(0);
    const dt = new Date();
    const x = dt.getTime();
    const checked = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const id = parseInt(e.target.value);
            setidUser(id)
        }
    };

    return (
        <div className="linear-background">
            <Header />
            <Container>
                <div className="py-[150px]">
                    <div className="w-full bg-blue-900 rounded-sm flex justify-center flex-row items-center h-[750px]">
                        <div className="flex-2 flex justify-center flex-col items-center">
                            <h1 className="text-[2em] font-bold text-white text-center p-[1em]">
                                Faça pagamentos com tranquilidade, protegemos suas transferências de forma eficiente.{" "}
                            </h1>
                            <div>
                                <p className="text-[1em] font-bold text-white">Veja por si mesmo porque é que milhões de pessoas adoram P.I.A.</p>
                            </div>
                            <div className="mt-[3rem]">
                                <Link className="block text-center py-3 px-10 bg-[#347BB8] hover:bg-[#2b6496] rounded-sm text-white" to="/access">
                                    Acessar
                                </Link>
                            </div>
                        </div>

                        <form className="">
                            <div className="w-[90%] flex justify-center items-center">
                                <div className="my-[4%] mx-auto border-l border-[#ddd] p-7">
                                    <div className="my-3 mx-auto flex items-start gap-2">
                                        <div className="pt-2">
                                            <input
                                                className="w-5 h-5 rounded-sm placeholder:opacity-80 text-lg"
                                                type="radio"
                                                name="instituition"
                                                id="superior"
                                                list="ano"
                                                onChange={checked}
                                                value={1}
                                            />
                                        </div>
                                        <div className="description">
                                            <label htmlFor="superior" className="text-white  font-bold text-2xl">Instituição Superior</label>
                                            <p className="text-gray-200 pt-2">
                                                Receba transições em tempo real, dos seus encarregados e
                                                alunos. E mas, envie convocatórias, conversa via chat, envia emails para todos os encarregados de forma facíl, seguro e rápido.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="my-3 mx-auto flex items-start gap-2 pt-10">
                                        <div className="pt-2">
                                            <input
                                                className="w-5 h-5 rounded-sm placeholder:opacity-80 text-lg"
                                                type="radio"
                                                name="instituition"
                                                id="secundary"
                                                onChange={checked}
                                                list="ano"
                                                value={2}
                                            />
                                        </div>
                                        <div className="description">
                                            <label htmlFor="secundary" className="text-white font-bold  text-2xl">Instituição de Ensino Secundário</label>
                                            <p className="text-gray-200 pt-2">
                                                Agora seus clientes(encarregados) já podem fazer os pagamentos a partir do
                                                computador ou dispositivo móvel, sem se locomover
                                                para a sua instituição ou mesmo ao banco. É mais simples,
                                                fácil e seguro.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-[3rem] p-2">
                                        <Link to={`/sigup/${x * 100}${idUser}`}>
                                            <button className="border-0 py-3 px-10 rounded-sm text-white font-semibold decoration-0 text-center bg-[#347BB8] hover:bg-[#2b6496] hover:text-white focus:outline-none focus:opacity-80" type="button">
                                                Avançar
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}