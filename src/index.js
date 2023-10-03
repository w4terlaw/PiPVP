import React from 'react';
import ReactDOM from 'react-dom/client';

import Profile1 from './tasks/z1';
import Profile2 from './tasks/z2';
import Profile3 from './tasks/z3';
import {Congratulations} from './tasks/z4';
import TodoList1 from './tasks/z5';
import TodoList2 from './tasks/z6';
import FeedbackForm1 from './tasks/z7';
import PackingList from "./tasks/z8";
import LightSwitch from "./tasks/z9";
import Signup from "./tasks/z10";
import Toolbar from "./tasks/z11";
import Form from "./tasks/z12";
import FeedbackForm2 from "./tasks/z13";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Задание 1</h1><Profile1/>
        <h1>Задание 2</h1><Profile2/>
        <h1>Задание 3</h1><Profile3/>
        <h1>Задание 4</h1><Congratulations/>
        <h1>Задание 5</h1><TodoList1/>
        <h1>Задание 6</h1><TodoList2/>
        <h1>Задание 7</h1><FeedbackForm1/>
        <h1>Задание 8</h1><PackingList/>
        <h1>Задание 9</h1><LightSwitch/>
        <h1>Задание 10</h1><Signup/>
        <h1>Задание 11</h1><Toolbar/>
        <h1>Задание 12</h1><Form/>
        <h1>Задание 13</h1><FeedbackForm2/>
    </div>
);