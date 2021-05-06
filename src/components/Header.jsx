import React from 'react';

const Header = (props) => {

    return(
            <h1
                className       = 'text-center'
            >
                { `Porque hoy ${ props.dayName }, ${ props.day } de ${ props.month } del ${ props.year } te elijo 🍒` }
            </h1>
    );
}

export {
    Header
};