import React, {
    Fragment,
    useEffect,
    useState
} from 'react';

import {
    defineSaludo
} from '../utils/generalFunctions';

const Dec6_2020 = () => {

    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
                <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
                <h3>Debes saber que siempre estoy orgulloso de ti y eso jamás nadie lo podrá cambiar</h3>
                <h3>Muchas felicidades por tu año más de logros y por todos aquellos venideros que seguro estarán llenos de éxitos y muchas muchas alegrías. Te mereces lo mejor, así que lucha por lo mejor. Y para que nunca lo olvides te dejo un bonito recuerdo!!! 😌😌😌</h3>
                <br/>
                <br/>
                <h3>06/12/20 🍒🍒🍒</h3>
                <img id="image-5anios" src="./images/festejo_5_anios.jpg"></img>
        </Fragment>
    )
};

export {
    Dec6_2020
}