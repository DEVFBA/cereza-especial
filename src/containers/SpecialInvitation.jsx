import React, {
    Fragment,
    useEffect,
    useState
} from 'react';

import {
    defineSaludo
} from '../utils/generalFunctions';

const SpecialInvitation = () => {
    
    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
            <h2>Hoooooooooooooooooooooooooooooolaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hoooooooooooooooooooooooooolaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa { saludo }</h2>
            <h3>Es oficial, mi proyecto se presentará en Prototype Day!!!!!! 😁😎🥳🤓</h3>
            <h3>Y la invitación como te dije es muy muy muy especial para ti Mariela, sencillamente porque eres única y especial!!!!!!</h3>
            <h3>Así que en esta que fue la página que hice para ti quedas oficial y especialmente invitada el día</h3>
            <h3>Jueves 27 de Mayo a las 19:00 hrs a la presentación de mi proyecto final de este curso</h3>
            <h3>que me ha costado algunas desveladas, pero que culmina por fin y del cual me sentiré honrado con tu asistencia</h3>
            <br />
            <br />
            <h3>El Link de Zoom aún no lo comparten, seguramente será esa misma semana. Te lo estaré enviando en cuanto lo tenga 😁</h3>
            <h3>Te comparto mis retros en cada módulo 😌, cada una de ellas y cada entrega tenía una dedicatoria especial.... sabes a qué me refiero</h3>
            <h3>La de la evaluación de ayer aún no la tengo jeje pero en cuanto la tenga te la comparto</h3>
            <h3>Primer Módulo</h3>
            <img class="img-fluid" src="./images/Primera.png"></img>
            <h3>Segundo Módulo</h3>
            <img class="img-fluid" src="./images/Segunda.png"></img>
            <h3>Tecer Módulo</h3>
            <img class="img-fluid" src="./images/Tercera.png"></img>
            <h3>Cuarto Módulo</h3>
            <img class="img-fluid" src="./images/Cuarta.png"></img>
        </Fragment>
    );

}

export {
    SpecialInvitation
};