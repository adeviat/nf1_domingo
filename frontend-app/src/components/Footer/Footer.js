import React from 'react';
import './Footer.css';
import RestaurantList from "./components/ComponentList/ComponentList";

function Footer() {

    const restaurant = [{
        name: 'Mcdonald',
        Ubication: 'Barcelona',
        Comida: 'Hambuguesa',
    }, {
        name: 'Burguerking',
        Ubication: 'Badalona',
        Comida: 'Pizza',
    }, {
        name: 'Subway',
        Ubication: 'Tarragona',
        Comida: 'Bocadillos',
    }];

    return (


        <div className="back">

            <RestaurantList restaurant={restaurant}/>

            <div id="footerarc">
                < img id="footerarc1"
                      src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/curve.svg"/>
            </div>

            <div id="containerfooter">
                <div id="glovofooter">
                    <img
                        src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glovo-white.svg"/>
                </div>
                <div className="optionsfooter1">
                    <ul>
                        <li className="footertext1">JOIN US</li>
                        <li className="footertext2">Careers</li>
                        <li className="footertext2">Store partners</li>
                        <li className="footertext2">Couriers</li>
                        <li className="footertext2">Glovo business</li>
                    </ul>
                </div>
                <div className="optionsfooter1">
                    <ul>
                        <li className="footertext1">HELP</li>
                        <li className="footertext2">FAQS</li>
                        <li className="footertext2">Contact us</li>
                    </ul>
                </div>
                <div className="optionsfooter1">
                    <ul>
                        <li className="footertext1">LEGAL</li>
                        <li className="footertext2">Terms and conditions</li>
                        <li className="footertext2">Privacy policy</li>
                    </ul>
                </div>

                <div className="optionsfooter1">
                    <ul>
                        <li className="footertext1">FOLLOW US</li>
                        <li className="footertext2">Facebook</li>
                        <li className="footertext2">Twitter</li>
                        <li className="footertext2">Instagram</li>
                    </ul>
                </div>
                <div className="optionsfooter3">
                    <img className="iphone"
                         src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/app_store/download-button.svg"
                         alt=""/>
                    <img className="iphone"
                         src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/google_play/download-button.svg"
                         alt=""/>
                </div>
            </div>

            <div id="containermenu">
                <select id="menu1">
                    <option className="menu2" value="Espanol">Espanol</option>
                    <option className="menu2" value="English">English</option>
                    <option className="menu2" value="Catala">Catala</option>
                    <option className="menu2" value="Frances">Frances</option>
                </select>
            </div>

            <RestaurantList restaurant={restaurant}/>

        </div>

    );
}

export default Footer;
