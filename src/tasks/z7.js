import React from 'react';
// import {getImageUrl} from './utils.js';


// TODO: Задание 7
function getImageUrl(person, size) {
    return '';
}

function Avatar({person, size}) {
    return (<img
            className="avatar"
            src={getImageUrl(person, size <= 90 ? 's' : 'b')}
            alt={size <= 90 ? 's' : 'b'}
            width={size}
            height={size}
        />);
}

export default function Profile() {
    return (<div>
        <Avatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara', imageId: '7vQD0fP'
            }}
        /><Avatar
        size={91}
        person={{
            name: 'Gregorio Y. Zara', imageId: '7vQD0fP'
        }}
    />
    </div>);
}
