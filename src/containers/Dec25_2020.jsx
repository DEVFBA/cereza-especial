import React, {
    Fragment,
    useEffect,
    useState
} from 'react';

import {
    defineSaludo
} from '../utils/generalFunctions';

const Dec25_2020 = () => {

    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
                <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
                <h3>En este Viernes de Fuertes Declaraciones Navideño; además obviamente de desearte Feliz Navidad quiero aprovechar para dar gracias a Dios por permitirme conocerte una Navidad más, no sé que vaya a pasar pero creeme que estoy muy agradecido y el mejor regalo de Navidad que puedo tener sencillamente es conocerte.</h3>
                <br/>
                <h3>Así que sencillamente Feliz Navidad, mis mejores deseos.</h3>
        </Fragment>
    )
};

export {
    Dec25_2020
}