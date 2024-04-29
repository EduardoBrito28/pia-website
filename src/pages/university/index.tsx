import Banner from "../../components/shared/Banner";
import Container from "../../components/shared/container";
import Header from "../../components/shared/header";

export default function Univercity() {
    return (
        <div>
            <div className="linear-background">
                <Header />
            </div>
            <div>
                <Banner />
                <Container>
                    <div className="py-10 w-full flex flex-row justify-around items-center">
                        <div className="flex justify-center items-center w-[450px] h-[450px] bg-gray-200">

                        </div>
                        <div className="flex justify-center items-center w-[450px] h-[450px] bg-orange-200">

                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}