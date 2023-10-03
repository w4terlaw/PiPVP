import React from 'react';

// TODO: Задание 11
export default function Toolbar() {
    const handleButtonClick = (e) => {
        e.stopPropagation();
        alert(e.target.value);
    }

    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <button onClick={handleButtonClick} value='Playing!'>
                Play Movie
            </button>
            <button onClick={handleButtonClick} value='Uploading!'>
                Upload Image
            </button>
        </div>
    );
}

