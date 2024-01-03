import './getDate.js';
import getDate from './getDate.js';
import Styles from '../../../styles.json';
export default function init() {
    //default set values on boot to prevent runtime errors
    if (localStorage.getItem('score') === null) { localStorage.setItem('score', 0); }
    if (localStorage.getItem('score_alltime') === null) { localStorage.setItem('score_alltime', 0); }
    if (localStorage.getItem('date') === null) { localStorage.setItem('date', getDate()); }
    if (localStorage.getItem('theme') === null) { localStorage.setItem('theme', 0) }

    //reset score if new day approaches
    if (localStorage.getItem('date') != getDate()) { localStorage.setItem('score', 0); }

    //preset :root styles
    const currentStyle = Styles[localStorage.getItem('theme')].set;
    document.documentElement.style.setProperty('--bg-1', currentStyle["--bg-1"]);
    document.documentElement.style.setProperty('--bg-2', currentStyle["--bg-2"]);
    document.documentElement.style.setProperty('--bg-3', currentStyle["--bg-3"]);
    document.documentElement.style.setProperty('--fn-1', currentStyle["--fn-1"]);
    document.documentElement.style.setProperty('--fn-2', currentStyle["--fn-2"]);

}