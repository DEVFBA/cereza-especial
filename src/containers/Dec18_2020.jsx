import React, {
    useEffect,
    useState,
    Fragment
} from 'react';

import {
    defineSaludo
} from '../utils/generalFunctions';

const Dec18_2020 = () => {

    const[saludo, setSaludo]            = useState('');

    useEffect(() => {

        let date = new Date();
        let hour = date.getHours();
        
        setSaludo(defineSaludo(hour));

    })

    return(
        <Fragment>
                <h2>Hooooooooooola Hoooooooooooola {saludo}</h2>
                <h3>En este Viernes de Fuertes Declaraciones sólo quiero decirte que en verdad mientras más pasa el tiempo más me doy cuenta de lo mucho que te deseo</h3>
                <h3>Y es esa clase deseo que suma tanto lo físico como lo del alma; y es que en verdad mirarte, pensarte me hace fantasear tantas cosas contigo. Eres sencillamente una mujer cuya sensualidad va más allá del hermoso cuerpo que tienes, te pienso y sólo quiero perderme en tu piel pero también en tu corazón, poder mirarte a los ojos mientras te hago el amor y que sean mis ojos y mis labios quienes te demuestren a cada segundo lo que siento por ti.</h3>
                <h3>Precisamente, porque el deseo que siento por ti va más allá de lo físico, es que deseo que seas muy feliz; y si eso significa que deba dejer que navegues y esperar para que me cuentes lo que hayas encontrado lo haré.</h3>
                <br/>
                <h3>De nueva cuenta hay una canción para este viernes que describe tal cual lo que quiero decir porque aún una parte de mi no se ha rendido y es que no dejo de pensar que lo vales, y sencillamente hoy TE SIGO ELIGIENDO A TI MARIELA</h3>
                <br/>
                <br/>
                <h3>"I don't wanna be someone who walks away so easily</h3>
                <h3>I'm here to stay and make the difference that I can make</h3>
                <h3>Our differences they do a lot to teach us how to use</h3>
                <h3>The tools and gifts we got, yeah, we got a lot at stake</h3>
                <h3>And in the end, you're still my friend at least we did intend</h3>
                <h3>For us to work we didn't break, we didn't burn</h3>
                <h3>We had to learn how to bend without the world caving in</h3>
                <h3>I had to learn what I've got, and what I'm not</h3>
                <h3>And who I am</h3>
                <br/>
                <h3>I won't give up on us</h3>
                <h3>Even if the skies get rough</h3>
                <h3>I'm giving you all my love</h3>
                <h3>I'm still looking up, I'm still looking up" 🎶🎵</h3>
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/O1-4u9W-bns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Fragment>
    )

}

export {
    Dec18_2020
}