import Advert from './Advert';
import Navbar from "./Navbar";
import './../header/assets/css/header.css';

const Header = ({ mobileNav, navbar, showNavbar }) => {
    return (
        <div className='header-wrapper'>
            <Advert />
            <Navbar navbar={navbar} showNavbar={showNavbar} mobileNav={mobileNav} />
        </div>
    )
}

export default Header;