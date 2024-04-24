import { AboutUs } from "../../components/common/HomePage/AboutUs";
import HomeBanner from "../../components/common/HomePage/Banner";
import { ServiceWeProvide } from "../../components/common/HomePage/ServicesWeProvide";
import Container from "../../components/shared/container";
import Header from "../../components/shared/header";

export default function HomePage() {
    return (

        <div className="">
            <Header />
            <HomeBanner />
            <Container>
                <AboutUs />
                <div className="bg-rocket bg-opacity-85 object-cover object-center bg-center w-full">
                    <ServiceWeProvide />
                </div>

            </Container>
        </div>
    )
}