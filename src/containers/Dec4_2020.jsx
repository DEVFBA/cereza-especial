import React, {
    Fragment,
    useEffect,
    useState
} from 'react';

import {
    defineSaludo,
    addZeroToMinute,
    weekDay,
    monthString
} from '../utils/generalFunctions';

const Dec4_2020 = () => {

    const[hour, setHour]                        = useState('');
    const[minute, setMinute]                    = useState('');
    const[minuteLength, setMinuteLength]        = useState('');
    const[saludo, setSaludo]                    = useState('');
    const[dayString, setDayString]              = useState('');
    const[day, setDay]                          = useState('');
    const[dayNumber, setDayNumber]              = useState('');
    const[monthStr, setMonthStr]          = useState('');
    const[year, setYear]                        = useState('');

    useEffect(() => {

        let date = new Date();
        
        setHour(date.getHours());
        setMinute(date.getMinutes());
        setMinuteLength(minute.toString().length);
        setSaludo(defineSaludo(hour));
        setDay(date.getDay());
        setDayString(weekDay(day));
        setDayNumber(date.getDate());
        setMonthStr(monthString(date.getMonth()));
        setYear(date.getFullYear());

    }, []);

    return(
        <Fragment>
                <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
                <h3>ΒΏSabes? Quise hacer algo original para este Viernes (4 de Diciembre) de fuertes declaraciones; y bueno, pues realmente lo que te quiero decir es que precisamente el dΓ­a de hoy TE ELIJO A TI π.</h3>
                <h3>Aunque ya no es Viernes 4 de Diciembre sigo estando seguro que te ves bellΓ­sima, sencillamente lo sΓ© porque cuando te vuelva a ver me gustarΓ‘s aΓΊn mΓ‘s.</h3>
                <h3 id="cherries">ππππππππππππππππππππππππππππ</h3>
                <h3>Por cierto, esto puedes consultarlo el dΓ­a que quieras no sΓ³lo aplica para los dΓ­as Viernes, por lo que si lo checas cualquier otro dΓ­a te darΓ‘s cuenta que hoy, siendo las {hour}:{addZeroToMinute(minute, minuteLength)} del {dayString}, {dayNumber} de {monthStr} del {year} te sigo eligiendo.</h3>
                <h3>Y eso es sencillamente porque NO ES EL LUGAR ES LA PERSONA, y contigo NO ES EL LUGAR, ERES TΓ</h3>
                <br/>
                <p>PD: Este creo que es el detalle mΓ‘s Γ±oΓ±o y geek que puede existir π€π€ pero como siempre es desde aquΓ­ -- β€</p>
                <img id="image-viernes" src="./images/Te_elijo_Mariela.png"></img>
        </Fragment>

    );

}

export {
    Dec4_2020
};