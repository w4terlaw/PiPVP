import React from 'react';

// TODO: Задание 9
export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (<button onClick={handleClick}>
            Toggle the lights
        </button>);
}
