import './Header.css'
const Header = ()=>{

return(

<>
<header className="site-header">

<div className="header-top">
    <div className="container">
        <div className="header-row">

            {/* <!-- Header top mobile START --> */}
            {/* <div className="header-mobile-logo">
                <a href="#">
                    <img src="../../../src/assets/images/logo-header.svg" alt="Construction"/>
                </a>
            </div> */}

            {/* <div className="hamburger">
                <span></span>
                <span></span>
            </div> */}
            {/* <!-- Header top mobile END -->	 */}
        
                <div className="header-info ">
                <i class="fa-solid fa-envelope"></i>
                <span >info@company.com</span>
               
                <i class=" header-porder fa-solid fa-wave-triangle"></i>
                <span>Sunny Isles Beach,FL 3316</span>
                </div>
            <div className="header-right">
                <div className="header-social">
                    <a href="#">
                    <div className='header-main-sm-fb'></div>
                    </a>
                    <a href="#">
                    <div className='header-main-sm-tw'></div>
                    </a>
                    <a href="#">
                    <div className='header-main-sm-ln'></div>
                    </a>
                    <a href="#">
                    <div className='header-main-sm-in'></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="header-bottom">
    <div className="container">
        <div className="header-bottom-row">
            <div className="header-logo">
                <a href="#">
                    <h1>VILLA</h1>
                    {/* <img src="../../../src/assets/images/logo-header.svg" alt="Construction"/> */}
                </a>
            </div>

            <nav className="header-nav">
                <ul>
                    <li><a className="anchor-link" href="#s-about">Home</a></li>
                    <li><a className="anchor-link" href="#s-services">Proerties</a></li>
                    <li><a className="anchor-link" href="#s-gallery">Proerty Details </a></li>
                  
                    <li><a className="anchor-link" href="#s-contact">Contact US </a></li>
                    <li><a className="anchor-link" href="#s-gallery"><img style={{height:'60px' , width:'160px'}} src = {'../../../src/assets/images/schedul.png'}></img> </a></li>
                    
                </ul>
            </nav>
        </div>
    </div>
</div>


{/* <!-- Header mobile START --> */}
{/* <div className="header-mobile-wrap">
    <nav className="header-mobile-nav">
        <ul>
            <li><a className="anchor-link" href="#s-about">About us</a></li>
            <li><a className="anchor-link" href="#s-services">Services</a></li>
            <li><a className="anchor-link" href="#s-gallery">Gallery</a></li>
            <li><a className="anchor-link" href="#s-team">Our team</a></li>
            <li><a className="anchor-link" href="#s-testimonials">Testimonials</a></li>
            <li><a className="anchor-link" href="#s-contact">Contact</a></li>
        </ul>
    </nav>

    <div className="header-mobile-info">
        <img src="../../../src/assets/images/location.svg" alt="ул. Гагарина 5Б г. Сочи"/>
        <span>Greenbe street 5B, Latvia</span>
    </div>
    <a href="tel:79504575654" className="header-mobile-info">
        <img src="../../../src/assets/images/phone.svg" alt="+7 950 457 5654"/>
        <span>+7 950 457 5654</span>
    </a>

    <div className="header-mobile-social">
        <a href="#">
            <img src="../../../src/assets/images/social-twitter.svg" alt="Twitter"/>
        </a>
        <a href="#">
            <img src="../../../src/assets/images/social-vk.svg" alt="Вконтакте"/>
        </a>
        <a href="#">
            <img src="../../../src/assets/images/social-facebook.svg" alt="Facebook"/>
        </a>
        <a href="#">
            <img src="../../../src/assets/images/social-telegram.svg" alt="Telegram"/>
        </a>
    </div>
</div> */}
{/* <!-- Header mobile END --> */}

</header>

</>

)

}
export default Header;