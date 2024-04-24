import Container from "../../components/shared/container";
import NotFoundImg from '../../components/assets/NotFound/error.webp'
import Header from "../../components/shared/header";

export default function NotFound() {
    return (
        <div className="bg-blue-950 w-full">
            <Header />
            <Container>
                <div className="py-[120px] flex flex-col items-center justify-center">
                    <img src={NotFoundImg} alt="Not Found Page" className="w-[50%]" />
                    <h3 className="text-white text-4xl pt-10">Página Não Encontrada</h3>
                    <h4 className="text-white text-lg">A Página não existe ou está em construção</h4>
                </div>
            </Container>
        </div>
    )
}