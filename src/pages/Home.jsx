import { useRef, useState } from "react";
import Header from "../components/header/Header"
import { FaImage, FaEdit, FaDownload } from 'react-icons/fa';
import Banner from "../components/Banner";
import IconBox from "../components/IconBox";
import CardLayout from "../components/cardLayout";
import Footer from "../components/Footer";
import CardCarouselLayout from "../components/cardCarousel";
const Home = () => {
    const navbar = useRef();
    const [showMobileNav, setMobile] = useState(false)
    const showNavbar = () => setMobile(!showMobileNav);

    return (
        <>
            <Header mobileNav={showMobileNav} navbar={navbar} showNavbar={showNavbar} />
            <div className="home--wrapper">
                <Banner hide={showMobileNav} />
                <div className="cardInfo-section">
                    <div className="card-info">
                        <IconBox type='select' icon={<FaImage />} />
                        <IconBox type='customise' icon={<FaEdit />} />
                        <IconBox type='download' icon={<FaDownload />} />
                    </div>
                </div>
                <CardLayout hide={showMobileNav} />
                <CardCarouselLayout />
                <Footer hide={showMobileNav} />
            </div>
        </>
    )
}
export default Home;