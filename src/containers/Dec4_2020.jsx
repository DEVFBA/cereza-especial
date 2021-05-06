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
                <h3>¿Sabes? Quise hacer algo original para este Viernes (4 de Diciembre) de fuertes declaraciones; y bueno, pues realmente lo que te quiero decir es que precisamente el día de hoy TE ELIJO A TI 🍒.</h3>
                <h3>Aunque ya no es Viernes 4 de Diciembre sigo estando seguro que te ves bellísima, sencillamente lo sé porque cuando te vuelva a ver me gustarás aún más.</h3>
                <h3 id="cherries">🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒🍒</h3>
                <h3>Por cierto, esto puedes consultarlo el día que quieras no sólo aplica para los días Viernes, por lo que si lo checas cualquier otro día te darás cuenta que hoy, siendo las {hour}:{addZeroToMinute(minute, minuteLength)} del {dayString}, {dayNumber} de {monthStr} del {year} te sigo eligiendo.</h3>
                <h3>Y eso es sencillamente porque NO ES EL LUGAR ES LA PERSONA, y contigo NO ES EL LUGAR, ERES TÚ</h3>
                <br/>
                <p>PD: Este creo que es el detalle más ñoño y geek que puede existir 🤓🤓 pero como siempre es desde aquí -- ❤</p>
                <img id="image-viernes" src="./images/Te_elijo_Mariela.png"></img>
        </Fragment>

    );

}

export {
    Dec4_2020
};