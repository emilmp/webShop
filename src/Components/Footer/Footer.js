import React from 'react';
import "./Footer.css";


const Footer = () =>{
    return(
        <div className="container">
            <div className='main'>
                <div className="row">
                    <div className="col">
                        <h4>WEB SHOP INC.</h4>
                        <ul className="listNoLinks">
                            <li>+4712345678</li>
                            <li>Oslo, Norway</li>
                            <li> Kongens Slottvei 1</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>GET TO KNOW US</h4>
                        <ul className="list">
                            <li>About Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>SUPPORT</h4>
                        <ul className="list">
                            <li>Contact us</li>
                            <li>FAQ</li>
                            <li>Warranty</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p>
                        &copy;{new Date().getFullYear()} Web Shop Inc. | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}



export default Footer;
