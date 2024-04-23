import { useEffect, useState } from "react";
import Container from "../../components/shared/container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../components/assets/logo.png";
import { StapSecand, StapStart, StapThird } from "../../components/Forms/Register";
import Header from "../../components/shared/header";

export default function SignUp() {

    const [stap, setStap] = useState(0);
    const navigate = useNavigate();
    const dt = new Date();
    const x = dt.getTime();
    const { user }: any = useParams();
    const location = useLocation();
    useEffect(() => {
        const stap = parseInt(user.substr(-1));
        setStap(stap);
    });

    return (
        <div className="linear-background">
            <Header />
            <Container>
                <div className="py-[150px]">
                    <div className="w-full bg-blue-900 bg-fixed bg-no-repeat flex justify-between h-[750px] py-36">
                        <div className="flex flex-1 justify-center p-5 items-center border-r">
                            <div className="">
                                <img src={Logo} alt="PCO Logo" className="w-[300px] mb-[50px]" />
                                <h3 className="text-white pco" style={{ fontSize: "2em" }}>
                                    P.I.A. DIRECTO EM SUA CASA
                                </h3>
                                <h2 className="text-white pco" style={{ fontSize: "2em" }}>
                                    ASSIM FICA MAIS FÁCIL!
                                </h2>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center items-center">
                            <div className="w-[80%] bg-white rounded-md mt-5 ">
                                <div className="bg-[#00A3E6] h-[60px] rounded-tl-md rounded-tr-md flex flex-row flex-1">
                                    <div className={`${location.pathname === "/sigup/1" ? "flex-1 py-0 px-[2em] flex items-center justify-center border-b border-[#00A3E6]" : "flex-1 py-0 px-[2em] flex items-center justify-center"}`}>
                                        <div className="w-10 h-10 rounded-[50%] bg-[#00A3E6] flex items-center justify-center">
                                            <div className="separate"></div>
                                        </div>
                                    </div>

                                    <div className={`${location.pathname === "/sigup/8" ? "flex-1 py-0 px-[2em] flex items-center justify-center border-b border-[#00A3E6]" : "flex-1 py-0 px-[2em] flex items-center justify-center"}`}>
                                        <div className="w-10 h-10 rounded-[50%] bg-[#00A3E6] flex items-center justify-center">
                                        </div>
                                    </div>
                                    <div className={`${location.pathname === "/sigup/9" ? "flex-1 py-0 px-[2em] flex items-center justify-center border-b border-[#00A3E6]" : "flex-1 py-0 px-[2em] flex items-center justify-center"}`}>
                                        <div className="w-10 h-10 rounded-[50%] bg-[#00A3E6] flex items-center justify-center">
                                        </div>
                                    </div>
                                </div>
                                {stap === 1 || stap === 2 ? (
                                    <>
                                        <div className="card-register">
                                            <StapStart />
                                            <div className="p-3 w-full flex justify-end">
                                                <button className="py-3 px-10 rounded-sm text-white outline-none bg-[#00A3E6]" onClick={() => navigate(`/sigup/8`)}>
                                                    Prosseguir
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : null}

                                {stap === 8 ? (
                                    <>
                                        <div className="card-register">
                                            <StapSecand />
                                        </div>
                                        <div className="p-3 w-full flex justify-end">
                                            <button className="py-3 px-10 rounded-sm text-white outline-none bg-[#00A3E6]" onClick={() => navigate(`/sigup/9`)}>
                                                Prosseguir
                                            </button>
                                        </div>
                                    </>
                                ) : null}

                                {stap === 9 ? (
                                    <>
                                        <div className="card-register">
                                            <StapThird />
                                        </div>
                                        <div className="p-3 w-full flex justify-end">
                                            <button className="py-3 px-10 rounded-sm text-white outline-none bg-[#00A3E6]" onClick={() => navigate(`/sorry`)}>
                                                Prosseguir
                                            </button>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}