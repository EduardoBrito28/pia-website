import HomeBanner from "../../components/common/HomePage/Banner";
import Container from "../../components/shared/container";
import Header from "../../components/shared/header";

export default function HomePage() {
    return (

        <div className="">
            <Header />
            <HomeBanner/>
            <Container>
                <div>
                    Home Page
                </div>
            </Container>
        </div>
    )
}