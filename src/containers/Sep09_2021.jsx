import React, {
    Fragment,
    useState,
    useEffect
} from 'react';

import { 
    Row,
    Col
  } from 'react-bootstrap';

import {
    defineSaludo
} from '../utils/generalFunctions';

const Sep09_2021 = () => {

    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
            <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
                <Row>
                    <Col
                        md   = { 6 }
                    >
                        <h3>Primero que nada.... Muy Feliz Cumpleaños a la Chavita de mi vida, a la Cereza del pastel que necesitaba en mis días, a tí Mariela tan hermosa que no dejas de tenerme loco por ti. A tí que me enseñaste que cuando llega alguien tan especial como tú, no hay forma en que quiera ver a nadie más.</h3>
                        <h3>Cuando te conocí, fueron 9 razones por las cuales debías sonreir</h3>
                        <h3>El segundo cumpleaños fueron 9 deseos muy particulares de mi hacia ti</h3>
                        <h3>Este año 2021, son 9 pequeñas historias resumidas en 9 palabras especiales, nueve palabras que describen como llegue a sentir lo que siento por ti, lo que significas para mí</h3>
                        <h3>Y quiero dejar aquí en tu página el recuerdo de esas historias, por si algún día futuro deseas recordarlo.... 😌</h3>
                        <h3>Así que sigue hacia abajo si deseas volver a leerlas...</h3>
                    </Col>
                    <Col
                        md  = { 6 }
                    >
                        <img class = 'img-fluid' src="./images/Bare_Bears_Birthday.jpg" alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h2 class = 'text-center'>Capítulo 1 - Inteligencia</h2>
                        <h3>Cuando te conocí la verdad en cada llamada me daba cuenta que estaba tratando con una mujer muy inteligente y dedicada. Y eso es una cualidad en ti que siempre vi (bueno escuché porque no te conocía) en ti cuando te fui conociendo aunque en ese momento solo fuera por temas de trabajo. Debo ser honesto que nunca me imaginé que conociera a esa mujer tan inteligente del otro del lado del teléfono ni del correo electrónico. Y debo confesar que precisamente esa INTELIGENCIA tuya me hacía ver la grandiosa persona que eres, ya comenzaba a preguntarme quien sería esa persona que me hacía ya admirarla sin conocerla, y la verdad es que tampoco me imaginaba que llegaría a conocerte en persona, todo fue una casualidad espontánea, una ironía de la vida, una bifurcacion del destino que sucedió de repente sin avisar, porque sigo estando seguro que no debía pasar pero alguien o algo le hizo trampa al tiempo y al destino (estoy seguro que el capitán América no regreso correctamente las gemas del infinito como debía hacerlo, se lo advirtieron a Hulk pero el no hizo caso) (disculpa la ñoñería 😬😬😬🤓🤓🤓🤓).</h3>
                        <h3>Hoy agradezco ese engaño a la vida, esa trampa que le pusieron al destino porque de entre tanta gente, a la distancia, y sin pensarlo llegaste fuera de toda probabilidad y estadística a mi vida y no me imaginaba lo que se venía, no me imaginaba el impacto que podrías tener, no me imaginaba que cada llamada estaba acercándome más y más a ello que no sabía que no buscaba, pero que al encontrarlo aprendí que no es cuestión de buscar si no de que incluso la vida también es tan INTELIGENTE que supo cuando debía poner en mi camino no a quien buscaba sino a quien necesitaba encontrar.</h3>
                    </Col>
                </Row>
                
                <Row>
                    <Col
                        md  = { 4 }
                    >
                        <img class = 'img-fluid' src="./images/polar_birthday.jfif" alt="" />
                    </Col>

                    <Col
                        md  = { 8 }
                    >
                        <h2 class = 'text-center'>Capítulo 2 - Melifluo</h2>
                        <h3>Y de repente comencé a preguntarme cómo será la mujer de esa voz tan bonita al teléfono, incluso me pregunté si en algún momento cuando fui a Dayton quizá nos cruzamos o cruzamos mirada sin saber que llegaríamos a conocernos. En qué momento el tono  MELIFLUO de tu voz me hacía preguntarme cómo era posible que a la distancia, sin conocerte hubiera una magia tan fuerte y magnífica que a kilómetros pudieras provocar en mi una sonrisa con solo escucharte.</h3>
                        <h3>Diría Bobby Pulido " Será que yo me encontré una voz de ternura, que me llena de placer cuando la oigo hablar…" Aún no sabía cómo eras, ni sabía si te conocería, no me quedaba más que sencillamente imaginarte, aunque de algo estaba seguro ya en ese entonces….</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Que no eras cualquier persona, yo ya sabía que había algo auténtico en ti, algo unico, algo que de alguna manera me atraía, algo MELIFLUO en el viento cuando pensaba en tu voz, un susurro tenue que estaba a punto de enseñarme que ……</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h2 class = 'text-center'>Capítulo 3 - Etéreo</h2>
                        <h3>….. por más que pensaba que sería mejor que la silueta ETEREA de esa voz siguiera viviendo en mi imaginación, una fuerza inexplicable me hacía preguntarme si en mi imaginación la imagen era la correcta. Y vaya que ya te veías hermosa en mi imaginación 😊</h3>
                        <h3>Sin embargo, lo ETEREO no hace daño, vive como una fantasía, como un sueño del cual despertaba al colgar el teléfono, pero regresaba al irme a dormir y pensar en tu voz si habíamos hablado durante el día. Lo ETEREO se puede esfumar y no regresar y podia seguir mi camino y desvanecer de alguna manera mis pensamientos, volver a envolverme en otras ideas, otras personas, otros lugares.</h3>
                        <h3>Y volvía a suceder, ya no solo era al escuchar tu voz, era al ver tu nombre en el identificador, esa sonrisa provocada por un momento efímero y fugaz que podía ser solo unos minutos pero hacían de un día magnífico algo inigualable algo único. Y la vida volvió a hacerme trampa, de la nada decidió que hubiera una oportunidad de que lo ETEREO se volviera real, dejara de ser una fantasía, un sueño. Y pasaron meses y un viaje a Canadá, una oportunidad, esa ramificación del destino que quizá pasar de casualidad a causalidad, una circunstancia que se volvió pretexto, una oportunidad de volver un sueño algo realidad, la puntualidad de la vida de en su ironía jugar conmigo y pasar de lo ETEREO a una realidad, abrí los ojos …..</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h2 class = 'text-center'>Capítulo 4 - Inefable</h2>
                        <h3>…… Salí de la cama, revise la hora, aún estaba a tiempo, me di un baño. Realmente había amanecido un día muy padre, se veía que sería soleado, que sería un buen día. </h3>
                        <h3>Había despertado una vez más tras haber soñado con esa silueta etérea e INEFABLE. Te había visto ya en una foto que me compartiste de tu ultimo cumpleaños con tu hermana gemela, y me hiciste adivinar quién serías tú….. adiviné… </h3>
                        <h3>Estaba listo como de costumbre desde muy temprano (nunca he sido bueno levantándome tarde), comencé a sentirme un poco nervioso, no iba a ser un día cualquiera, recordé los nervios que sentía cuando veía algún mensaje tuyo (los cuales ya no eran tan de trabajo), cuando tenía la posibilidad de escucharte y pintaras una gran sonrisa en mi rostro. </h3>
                        <h3>Fue entonces que precisamente llegó un mensaje tuyo, lo leí, en ese momento mi sonrisa fue mayor, abrí la puerta y me lleve una sorpresa. La belleza de quien vivía en mi cabeza, en mi imaginación tras haber visto una foto, había tomado un grado de realidad INEFABLE. Sonreí estúpidamente, mi cabeza se detuvo, dejo de pensar en todo y solo quiso concentrarse en ese momento INEFABLE…. Estabas ahí….. </h3>
                        <h3>Yo sabía que estabas hermosa, pero no pensé que al verte en persona tuvieras esa belleza, esa vibra INEFABLES capaces de dejarme sin palabras, de ponerle un alto a mi vida y haber convertido algo etereo no solo en una hermosa realidad si no en alguien cuya inteligencia, belleza y vibra te hacen ser una persona INEFABLE.</h3>
                        <h3>Te invite a pasar…..</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 6 }
                    >
                        <h2 class = 'text-center'>Capítulo 5 - Sempiterno</h2>
                        <h3>… mi mente y mi corazón en ese momento no sabían cómo reaccionar (de seguro por eso mi expresión de Homero cuando conoce a Marge). Fue en verdad un día grandioso, sentí una vibra aún más grande y hermosa que la que ya me contagiabas por teléfono. Si te soy honesto no quería que el día acabara, me sentía muy cómodo platicando contigo aunque recuerdo que ese día hablaste más tú… la verdad estaba nervioso.</h3>
                        <h3>Al finalizar el día, nos abrazamos y acordamos volver a vernos. Realmente deseaba que ese momento fuera SEMPITERNO. De esos momentos que incluso aun cuando me fui a dormir, quedaron grabados en el alma, un maravilloso día.</h3>
                    </Col>
                    <Col
                        md  = { 6 }
                    >
                        <img class = 'img-fluid' src="./images/Cadereyta.jpg" alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 6 }
                    >
                        <img class = 'img-fluid' src="./images/Flores_Mariela.png" alt="" />
                    </Col>
                    <Col
                        md  = { 6 }
                    >
                        <h3>Lo que si no quería que fuera SEMPITERNO era el tiempo que pasará para volver a verte, platicar, sentir esa vibra, esa magia únicas de ti. La verdad si paso mucho tiempo antes de volver a vernos, incluso hasta un arreglo de flores llegó a tu oficina. Volvimos a vernos, una lección de bolos que de manera SEMPITERNA seguirá en mi memoria, el abrazo que nos dimos en mi primera chuza después de tus consejos de profesional de bolos.</h3>
                        <h3>Otro día más SEMPITERNO en mi cabeza, alma y recuerdos.</h3>
                        <h3>Pareciera irreal, pero el comenzar a tenerte en mis sueños ya no como una silueta etérea, sino como una hermosa realidad, escucharte tu voz al teléfono y ya no imaginarte sino realmente pensarte con esa hermosura que tienes, esa sonrisa que el par de veces que la vi me hacía sentir en el cielo, comenzó a mover algo más en mi. Pensarte me brindaba placer y felicidad, escucharte no solo me hacía el día, lo hacía magnífico. Escribirte siempre aumentaba mi sonrisa y si está estresado me daba paz.</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h3>Llegó el momento de volver a verte, disfrutar un viaje juntos por tu cumpleaños. El primero aún no se de cuantos que festejaremos juntos. La emoción no la podía esconder, mucha gente se dio cuenta, y había decidido jugarmelo todo porque en verdad sabía que lo vales, que vales cada esfuerzo de demostrarte lo especial que ya eras para mí. Otro día más SEMPITERNO en mi alma, conocer Chautla que nunca habíamos ido ninguno de los dos, caminar por Cholula, darte una rosa (artificial pero de corazón), buscar farmacia para un paracetamol para tu migraña y una plática con churros que no me espere resultara como resultó (de entre todas tus cualidades está el don de cambiarme la vida y los planes) una plática que se sintió SEMPITERNA, al igual que esa noche aunque no pretendía sentirla así… a pesar de todo sentirte cerca de mi pasando una noche juntos fue …. Padre, bonito…. No como hubiera esperado pero no cambiará esa noche por nada… las cosas debían ser así….. </h3>
                        <h3>Me desperté tras una noche que se sintió SEMPITERNA, mi corazón acelerado libraba una de la batallas más fuertes contra mi cabeza, te aseguro que al público le estaban dando un espectáculo digno de recordar por esa batalla entre corazón y razón, se declaró un ganador, en el último cuarto lo ganó por apenas un gol de campo, ese gol de campo del que no me arrepentiré jamás, me la jugué y me decidí…..</h3>
                    </Col>
                </Row>
        </Fragment>
    )

}

export {
    Sep09_2021
}