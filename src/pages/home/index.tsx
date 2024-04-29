import { AboutUs } from "../../components/common/HomePage/AboutUs";
import HomeBanner from "../../components/common/HomePage/Banner";
import { Faq } from "../../components/common/HomePage/FAQ";
import { Price } from "../../components/common/HomePage/Price";
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
            </Container>
            <div className="bg-rocket object-cover object-center bg-center w-full bg-[#7745FF]">
                <Container>
                    <ServiceWeProvide />
                </Container>
            </div>
            <Container>
                <Price />
                <Faq/>
            </Container>
        </div>
    )
}