import React from 'react';
import './Viewinfo.css';

function ProfileTitle (){
    return (
        <div className="container_profile">
            <div className="profile_body">
                <div className="profile_title">PERFIL</div>
                <div className="profile_box">
                    <div className="profile_edit">Editar</div>
                    <div className="profile_names">Nombre</div>
                    <div className="profile_request">NOMBRE DB</div>
                    <div className="profile_names">E-mail</div>
                    <div className="profile_request">EMAIL DB</div>
                </div>
                <div className="profile_box">
                    <div className="profile_edit">Editar</div>
                    <div className="profile_names">Telefono</div>
                    <div className="profile_request">TELEFONO DB</div>
                </div>
                <div className="profile_box">
                    <div className="profile_edit">Editar</div>
                    <div className="profile_names">Contraseña</div>
                    <div className="profile_request">Contraseña DB</div>
                </div>
                <div className="profile_box2">
                    <div className="profile_logout">Cerras sesion</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileTitle;