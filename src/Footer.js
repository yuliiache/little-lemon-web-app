import logo from "./assets/images/logo-vertical.png";


function Footer() {
    const logoStyle ={
        height: '85px'
    }

    return (
        <footer className='footer grid-span-8 '>
            <img className="logo"
             src={logo}
             style={logoStyle}
             alt='little lemon logo'/>

            <h2>Doormat Navigation</h2>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>

            <h2>Contact</h2>
            <li><a href="https://maps.app.goo.gl/thpA5cDPNbcgQN4L8">Address</a></li>
            <li><a href="tel:+1234567890">Phone</a></li>
            <li><a href="mailto:info@littlelemon.com">Email</a></li>

            <h2>Social Media</h2>
            <li><a href="http://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="http://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="http://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </footer>
    )
}
export default Footer;
