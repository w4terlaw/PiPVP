import React from 'react';

// TODO: Задание 6
const person = {
    name: 'Gregorio Y. Zara', theme: {
        backgroundColor: 'black', color: 'pink',
    }, url: "https://i.imgur.com/7vQD0fPs.jpg"
};

export default function TodoList() {
    return (<div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={person.url}
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>);
}

