import './getDate.js';
import getDate from './getDate.js';
export default function init() {

    //default set values on boot to prevent runtime errors
    if (localStorage.getItem('score') === null) { localStorage.setItem('score', 0); }
    if (localStorage.getItem('score_alltime') === null) { localStorage.setItem('score_alltime', 0); }
    if (localStorage.getItem('date') === null) { localStorage.setItem('date', getDate()); }

    //reset score if new day approaches
    if (localStorage.getItem('date') != getDate()) {
        localStorage.setItem('score', 0);
    }
}