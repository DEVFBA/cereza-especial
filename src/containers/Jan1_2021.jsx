import React, {
    Fragment,
    useEffect,
    useState
} from 'react';

import {
    defineSaludo
} from '../utils/generalFunctions';

const Jan1_2021 = () => {

    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
                <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
                <h3>Inicio de Año Nuevo y en Viernes, coincidencias de la vida jeje.</h3>
                <h3>Hay una Fuerte Declaración en este Viernes tan especial, y tan único y es mi primer propósito del año 2021.</h3>
                <h3>Lo que me lleva a mi primer propósito de este año Mariela, y que siendo Viernes podría volverse una fuerte declaración....</h3>
                <h3>Mi propósito es...... QUE SEAS FELIZ MARIELA, y no me importa lo que cueste en verdad deseo que seas feliz, porque en serio lo mereces. Dios, en ti me dió un regalo de verdad único y quizá en su ironía su plan siempre fue que seas solo un viaje en mi vida; un viaje que por cierto volvería a realizar si la vida me lo permitiera, porque fue un viaje en serio hermoso.</h3>
                <h3>Y hablo de ironías porque sabes bien que todo indicaba que no había razón para conocernos; más sin embargo, fue así, nos cruzamos por alguna razón. Si es cierto que tú pedías paz y llegue yo, y que yo no me quería volver a enamorar y apareciste en mi puerta; creo entonces que ha sido el juego más irónico que Dios ha jugado conmigo. Sé que en algún momento encontraré la razón por la cual todo sencillamente fue así, por la cual me la quise jugar aún sabiendo el riesgo. Y es que vales cada uno de los riesgos que tomé, vales incluso este sentimiento que no sé cómo describir más que como una bendición.</h3>
                <h3>Bendición porque aunque hoy sé cual fué el resultado de jugármela, al menos no me quedé con la duda; y estoy agradecido contigo completamente por haber hecho el esfuerzo de darme la oportunidad de conquistarte.</h3>
                <h3>Por eso es que mi propósito es que seas feliz y sé que incluso ya lo eres, por eso sé que te aguarda una felicidad mayor en la vida. Una que ni te imaginas, y es que estoy seguro que allá afuera existe ese alguien que te motivará a ser tu mejor versión, y es que no habrá nadie que te ame como yo, sino que te amará aún más y que te demostrará cada día de tu vida que eres ÚNICA.</h3>
                <h3>Los nueve deseos que te hice el año pasado fueron de corazón y sé que llegarán cargados de bendiciones, y nunca va a faltar el día que te envíe porras, buenas vibras y tal vez en algún momento tan solo un susurro a tu oído desde donde este diciéndote "Hoy será el mejor día de tu vida"</h3>
                <h3>Así que...... sencillamente SE FELIZ y que cada Año Nuevo en tu vida sea mucho mejor que el anterior.</h3>
                <br/>
                <br/>
                <h3>Hoy, siendo las 00:00 del Viernes, 01 de Enero del 2021 te sigo eligiendo y porque te elijo Mariela es que decido sencillamente....... permitir que seas aún más FELIZ.</h3>
        </Fragment>
    )
};

export {
    Jan1_2021
}