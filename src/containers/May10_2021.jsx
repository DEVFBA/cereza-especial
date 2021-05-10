import React, {
    Fragment,
    useState,
    useEffect
} from 'react';

import {
    defineSaludo
} from '../utils/generalFunctions';

const May10_2021 = () => {

    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
            <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
            <h3>En este Lunes tan especial que e festejea a las mamás</h3>
            <h3>Te quiero dejar este pequeño detalle como el recuerdo de la primer serenata que te dedico, si bien no la serenata más ortodoxa, si una que viene desde el corazón.</h3>
            <h3>Que te festejen mucho y que te consientan como mereces. Naty se ganó la fortuna de que seas su mamá.</h3>
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/F4gP4GIkqgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Fragment>
    )
}

export {
    May10_2021
}