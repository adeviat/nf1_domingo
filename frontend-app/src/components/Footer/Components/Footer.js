import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
<footer className="Footer">
                <div className="container_footer">

                <div className="container_divs">
                <div className="title_links_footer logo">
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glovo-white.svg" alt="Glovo" className="footer_logo"/>
                </div>
                <div className="title_links_footer">TRABAJA CON NOSOTROS
                                <a href="empleo" className="subtitle_title_links_footer">Empleo</a>
                                <a href="Establicimientosasociados" className="subtitle_title_links_footer">Establicimientos asociados</a>
                                <a href="Repartidores" className="subtitle_title_links_footer">Repartidores</a>
                                <a href="GlovoBusiness" className="subtitle_title_links_footer">Glovo Business</a>
                </div>
                <div className="title_links_footer">AYUDA
                        <a href="Preguntasfrecuentes" className="subtitle_title_links_footer">Preguntas frecuentes</a>
                        <a href="Contacto" className="subtitle_title_links_footer">Contactos</a>
                        </div>
                <div className="title_links_footer">TÉRMINOS LEGALES
                       <a href="Terminosycondiciones" className="subtitle_title_links_footer">Terminos y condiciones</a>
                       <a href="Politicadeprivacidad" className="subtitle_title_links_footer">Politica de privacidad</a>
                 </div>
                 <div className="title_links_footer">SÍGUENOS
                        <a href="Facebook" className="subtitle_title_links_footer">Facebook</a>
                        <a href="Twitter" className="subtitle_title_links_footer">Twitter</a>
                        <a href="Instagram" className="subtitle_title_links_footer">Instagram</a>
                        </div>
                        <div className="title_links_footer">
                        <a href="#" className="subtitle_title_links_footer">
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/app_store/download-button.svg" alt="App Store" className="store-icon"/>
                        </a>
                        <a href="#" className="subtitle_title_links_footer">
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/google_play/download-button.svg" alt="Google play" className="store-icon"/>
                        </a>
                        </div>
                        </div>
                        <div className="container_langues">
                        <div className="container_dropdown">
                        <select className="container_dropdown_li">
                        <option>
                           Español
                        </option>
                        <option>
                          English
                        </option>
                        <option>
                          Catalá
                        </option>
                        <option>
                          Français
                        </option>
                        <option>
                          Italiano
                        </option>
                        <option>
                          Portugués
                        </option>
                        <option>
                          Portugués (Brasil)
                        </option>
                        <option>
                          Español (internacional)
                        </option>
                        <option>
                          Español (Argintina)
                        </option>
                        <option>
                          Românâ
                        </option>
                        <option>
                          Türkçe
                        </option>
                        <option>
                          ქართული
                        </option>
                        <option>
                          Українська
                        </option>
                        <option>
                          Русский
                        </option>
                        <option>
                          Hrvatski
                        </option>
                        <option>
                          Polski
                        </option>
                        <option>
                          srpski
                        </option>
                        </select>
                        </div>
                        </div>
              </div>

        </footer>
);
}

export default Footer;
