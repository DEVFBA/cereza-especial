const weekDay = (day) => {
    let dayString = "";

    switch(day){
        case 0:
            dayString = "Domingo";
            break;

        case 1:
            dayString = "Lunes";
            break;

        case 2:
            dayString = "Martes";
            break;

        case 3:
            dayString = "Miércoles";
            break;

        case 4:
            dayString = "Jueves";
            break;

        case 5:
            dayString = "Viernes";
            break;

        case 6:
            dayString = "Sábado";
            break;

        default:
            dayString = "el día de hoy"
    }

    return dayString;
};

const monthString = (monthNumber) => {
    let monthString = "";

    switch(monthNumber) {
        case 0:
            monthString = "Enero";
            break;

        case 1:
            monthString = "Febrero";
            break;

        case 2:
            monthString = "Marzo";
            break;

        case 3:
            monthString = "Abril";
            break;

        case 4:
            monthString = "Mayo";
            break;

        case 5:
            monthString = "Junio";
            break;

        case 6:
            monthString = "Julio";
            break;

        case 7:
            monthString = "Agosto";
            break;


        case 8:
            monthString = "Septiembre";
            break;

        case 9:
            monthString = "Octubre";
            break;

        case 10:
            monthString = "Noviembre";
            break;

        case 11:
            monthString = "Diciembre";
            break;

        default:
            monthString = "de este mes"
    }

    return monthString;
};

const defineSaludo = (hour) => {
    let saludoString = "";

    if(hour < 12){
        saludoString = "bueeeeeenossssss dddííííííííííííaaaaasssss"
    } else if(hour < 19){
        saludoString = "bueeeeeenassssss taaaaaaaaaaaaarrrdessssss"
    } else {
        saludoString = "bueeeeeenassssss nooooooooccccheeeeeeeeees"
    }

    return saludoString;
};

const addZeroToMinute = (minute, minuteLength) => {
    let minuteString = "";

    if(minuteLength === 1){
        minuteString = "0" + minute;
    } else{
        minuteString = minute;
    }

    return minuteString;
};

export {
    weekDay,
    monthString,
    defineSaludo,
    addZeroToMinute
}