import React from 'react';


// TODO: Задание 10
export default function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitting!');
    };

    return (<form onSubmit={handleSubmit}>
            <input/>
            <button type="submit">Send</button>
        </form>);
}
