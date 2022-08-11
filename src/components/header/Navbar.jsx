
import { FaBars } from 'react-icons/fa';
import mobileLogo from '../../assets/images/logo-mobile.svg';
import logo from '../../assets/images/logo_light.svg'
import SearchBar from './SearchBar';
import Button from '../Button';
import MobileView from './MobileView';

import { BrowserRouter as Link } from 'react-router-dom';

const Navbar = ({ navbar, showNavbar, mobileNav }) => {

    return (
        <div className='header'>
            <div className='flex'>
                <button className='navbar-btn-icon' onClick={showNavbar}>
                    <FaBars className='icon' />
                </button>
                <img className='header_mobile-logo' src={mobileLogo} alt="mobile_logo" />
            </div>
            <nav className={`navbar ${mobileNav ? 'responsive_nav' : ''}`} ref={navbar}>
                <div className="nav-items">
                    <ul className="nav-menu">
                        <li><Link to="/">How it Works</Link></li>
                        <li><Link to="/select-card">Select a Card</Link></li>
                        <li><Link to="/Premium">Premium</Link></li>
                    </ul>
                </div>

                <div className="nav-logo">
                    <span className='desktop-logo'>
                        <img src={logo} alt="desktop_logo" />
                    </span>
                </div>

                <div className="search-assured">
                    <SearchBar />
                    <Button text='Assured.com' link='https://useassured.com/' styleClass='assured-btn' />
                </div>
                <MobileView showBar={showNavbar} />
            </nav>
            <Button text='Assured.com' link='https://useassured.com/' styleClass='assured-btn mobile-assured-btn' />
        </div>
    )
}

export default Navbar