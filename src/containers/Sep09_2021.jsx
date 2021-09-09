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
                        <img class = 'img-fluid' src="./images/Polar.jpg" alt="" />
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

                <Row>
                    <Col
                        md  = { 6 }
                    >
                        <h2 class = 'text-center'>Capítulo 6 - Sensualidad</h2>
                        <h3>…. te bese la frente, luego una mejilla, no me pude resistir, te di un beso en los labios el cual respondiste. Me sentí un adolescente besando por primera vez porque lo que se senti en ese momento, fuera de todo cliché, fue único. Te abrace y te dije que en verdad quería jugarmela, que no pensaba hacerme a un lado sin haber realmente dado todo por demostrarte que quería ser diferente, que quería estar contigo y ser parte de ti, fue en ese momento que la definición de SENSUALIDAD tomo un significado más allá de lo físico cuando estabas encima de mi mientras te besaba. No lo voy a negar, verte desnuda me puso al mil, pero no solo era el placer físico de sentir con mis manos tu piel, cada curva de tu cuerpo, estar admirando por primera vez tu desnudez, sino que también era el revoloteo de sentimientos de poder tener un poco de ti, de tu entrega, de poder demostrarte en cada caricia lo que me hacías sentir en cada llamada, cada plática, combinar todo aquello que pensaba y sentía por ti, combinar casa experiencia que me hacías vivir y sentir tu SENSUALIDAD física y del alma. No lo voy a negar, fantasee mucho tiempo con ese momento, y al poderlo vivir fue aún mejor, los nervios me afloraron más allá de lo que creí.</h3>
                    </Col>

                    <Col
                        md  = { 6 }
                    >
                        <img class = 'img-fluid' src="./images/Primera_Vez.png" alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h3>Verte partir, quedándome con una oportunidad mínima de poder demostrarte que en verdad ya significabas mucho para mí, me hizo sentir tranquilo, sabía que cualquiera que fuera el resultado ya había ganado esa oportunidad de ser quien te hiciera perder los miedos.</h3>
                        <h3>Cuándo conoces la SENSUALIDAD, de la manera que me has hecho conocerla, aprendes que el placer que me provocas puede venir desde el sencillo hecho de saber que existes, de saber que te cruzaste en mi camino. Las fantasías pasan más allá de la cama y se vuelven la alegría de tan solo poder tocar tu mano, verte a los ojos y besarte.</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md = { 4 }
                        >
                        <img class = 'img-fluid' src="./images/Homero.jpg" alt="" />
                    </Col>

                    <Col
                        md = { 8 }
                    >
                        <h3>Caminar a tu lado y sentirme poderoso, es uno de los mayores placeres porque tu SENSUALIDAD viene también de lo maravillosa que eres como mujer, de lo grandiosa que es tu alma. Tu SENSUALIDAD es la suma de cada curva de tu cuerpo, de cada sueño que tienes como mujer, de todos los esfuerzos que haces por salir adelante al lado de tu hija, de lo que me has enseñado y lo mucho que he aprendido habiendo convivido contigo.</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md = { 12 }
                    >
                        <h3>Hacerte el amor en la cama, las pocas veces que ha sucedido, es un acto de demostrarte que eres la chavita de mi vida, de poder acariciarte y mientras te miro a los ojos permitir que veas mi alma y que sepas la galaxia de sentimientos que has tatuado no solo en mi piel sino en mi alma.</h3>
                        <h3>Te ganaste con todas tus cualidades un lugar en mi piel en mis tatuajes y llevaste el concepto de SENSUALIDAD que vivía cuando fantaseaba contigo, a fantasear con hacerte sonreír y saber que eres feliz. Me inspiras no a ser poeta, no escritor, solo un intento de artista que busca pintar una sonrisa en tu rostro (se que aún no he podido pintar la mejor de tus sonrisas). Se en el corazón que si Dios y la vida me dan la oportunidad de poder mirarte a los ojos y pintar tu mejor sonrisa, una incluso mejor de la que hayan pintando otras personas, conoceré un grado de SENSUALIDAD que no cualquier podría conocer, se que habré conocido el concepto de SENSUALIDAD que te hace tocar el……</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h2 class = 'text-center'>Capítulo 7 - Infinito</h2>
                        <h3>... INFINITO, y es que besarte es sentir que los pies se me despegan del suelo y mi mente y corazón viajan a través de lo INFINITO que es el universo.</h3>
                        <h3>De entre todo el mundo de sensaciones existentes, lo que eres capaz de provocar como mujer es indescriptible, no existen palabras y la única que podría encontrar es INFINITO esperando que exista alguna forma de describir en palabras lo que siento por ti. Llevamos siete y aún creo que me quedo corto en poderlo describir. </h3>
                        <h3>De entre millones de historias que se cuentan en este universo, la que inició con una trampa del destino es para mí la que espero la vida escoja para que quede grabada en alguna estrella y se quede para contarse INFINITAS veces y que alguien tras milenios pueda, al ver esa entrella en el INFINITO universo, que la vida se encarga de darnos a todos la oportunidad de una…….</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md = { 6 }
                    >
                        <img class = 'img-fluid' src="./images/Cielo.png" alt="" />
                    </Col>

                    <Col
                        md  = { 6 }
                    >
                        <h2 class = 'text-center'>Capítulo 8 - Serendipia</h2>
                        <h3>…. SERENDIPIA, y es que bien dicen que no sabes ni siquiera lo que buscas hasta que sencillamente llega ese momento en donde conoces una fortuna distinta, pasa algo que pareciera un accidente afortunado.</h3>
                        <h3>Un accidente porque por más que lo pienso no debió ocurrir, y afortunado porque por más errores que haya cometido en el pasado la vida y Dios me regaló la fortuna de conocerte, de sentir algo por ti y que me enseñarás una manera de sentir diferente, una manera de sentir auténtica.</h3>
                        <h3>Darme cuenta que puedo ser aún mejor persona es una SERENDIPIA.</h3>
                        <h3>Encontrar un sentimiento tan fuerte es una SERENDIPIA.</h3>
                        <h3>Poder escuchar tu voz es una SERENDIPIA. </h3>
                        <h3>Compartir la mesa contigo, un helado, una película es una SERENDIPIA.</h3>
                        <h3>Tu belleza es una SERENDIPIA.</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md = { 12 }
                    >
                        <h3>Tu cuerpo, tu piel, perderme en ti cuando hemos hecho el amor es una SERENDIPIA.</h3>
                        <h3>Besarte es una SERENDIPIA.</h3>
                        <h3>Contarte pato aventuras es una SERENDIPIA.</h3>
                        <h3>Y así podría seguir y seguir, y es que cada momento compartido, cada llamada, cada mensaje es un hallazgo nuevo, un sentimiento nuevo que se suma a lo que ya siento por ti y debo dar gracias a Dios en esta víspera de tu cumpleaños 32 que me haya dado la oportunidad de abrir esa puerta y verte ahí, que me dé la bendición de conocerte y que cada que te conozco más sea una SERENDIPIA, porque tú Mariela eres única, tienes una magia solo tuya que me hace estremecer y si vieras mi sonrisa cuando veo tu nombre en una notificación o en una llamada o mi sonrisa nerviosa cuando se que te veré, verías la misma sonrisa que viste cuando abrí la puerta y viví sencillamente una SERENDIPIA cuando llegaste a mi vida, cuando llegaste a convertirte en la chavita de mi vida, cuando te convertiste en ….</h3>

                    </Col>
                </Row>

                <Row>
                    <Col
                        md  = { 12 }
                    >
                        <h2 class = 'text-center'>Capítulo 9 - Cereza</h2>
                        <h3>……. CEREZA, y si me apego a la definición de la RAE </h3>
                        <h3>F. Fruto del cerezo. Es una drupa con cabillo largo, casi redonda, de unos dos centímetros de diámetro, con surco lateral, piel lisa de color encarnado más o menos oscuro, y pulpa muy jugosa, dulce y comestible.</h3>
                        <h3>Pero en este particular caso la definición, el significado que toma va más allá de lo que cualquier persona pueda definir, leer o pensar.</h3>
                        <h3>Para mí la mejor definición es….</h3>
                    </Col>
                </Row>

                <Row>
                    <Col
                        md = { 6 }
                    >
                        <h3>Mujer única que con su INTELIGENCIA es capaz de cautivar a cualquiera, con la magia de que solo con escuchar el candor MELIFLUO me hace pensar tanto en ella que me brotan sentimientos que nunca había sentido. Esa mujer que es capaz de envolver un sueño ETEREO en el deseo INFINITO de que esa silueta INEFABLE que se graba en sueños y fantasías se vuelva una realidad. Esa persona que cuando por fin se volvió una realidad deseo que cada segundo se vuelva SEMPITERNO solo por encontrar una oportunidad de mirarme en sus ojos. Esa SERENDIPIA que sucede cuando decides abrir una puerta y dejarte llevar. La causalidad y trampa del destino que me llevo a conocer que tú SENSUALIDAD va más allá de tu hermoso cuerpo desnudo y del calor que siento acariciando tu piel y besándote, está en poderte ver sonreír y fantasear no solo con volver a hacerte el amor, sino en poder caminar a tu lado, hacerte reír y poder compartir un día contigo.</h3>
                        <h3>Esa, es la definición de CEREZA en mi vocabulario, en mi piel, en motivarme y dedicarte no solo palabras, sino dedicarte mi motivación, dedicarte mis ganas de que cualquiera que sea el camino del destino seas inmensamente feliz y que hoy que estás cumpliendo años se te abran millones de puertas y bendiciones que mereces desde el momento en que llegaste a este mundo, porque entre todo el mundo te encontré sin merecerlo y eres el regalo de Dios del cual estoy muy agradecido porque todo lo anterior se resume en ti, en tu esencia. Porque CEREZA eres tú, porque no es el lugar, ni el tiempo, ni nada que se pueda definir ni si quiera en nueve palabras, eres tú Mariela.</h3>
                    </Col>

                    <Col
                        md = { 6 }
                        >
                        <img class = 'img-fluid' src="./images/La_Mejor_Sonrisa.jpg" alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col
                        md = { 12 }
                    >
                        <h3>Feliz cumpleaños 🍒😌 gracias por sencillamente existir y darme la oportunidad de que mi corazón sienta algo por ti. Gracias por ser la CEREZA del pastel de mi vida.</h3>
                        <h3>Por siempre mis mejores deseos en este año nuevo de vida que Dios te está regalando.</h3>
                        <h3>Atte…. El que sonríe por saber que existes.</h3>
                    </Col>
                </Row>
        </Fragment>
    )

}

export {
    Sep09_2021
}