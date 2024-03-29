import { useState, useEffect } from 'react';
import '../styles/settings.css';
import Styles from '../../styles.json';
import init from '../config/functions/init';
import getDaysSinceStart from '../config/functions/getDaysSinceStart.js';
export default function Settings() {
    init();
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('theme'));

    //apply settings on bootup
    useEffect(() => {
        localStorage.setItem("theme", currentColor);
        const currentStyle = Styles[currentColor].set;
        document.documentElement.style.setProperty('--bg-1', currentStyle["--bg-1"]);
        document.documentElement.style.setProperty('--bg-2', currentStyle["--bg-2"]);
        document.documentElement.style.setProperty('--bg-3', currentStyle["--bg-3"]);
        document.documentElement.style.setProperty('--fn-1', currentStyle["--fn-1"]);
        document.documentElement.style.setProperty('--fn-2', currentStyle["--fn-2"]);
    }, [currentColor]);

    const cycleTheme = () => { setCurrentColor((prevIndex) => (prevIndex + 1) % Styles.length); };

    //reset storage but keep the alltimescore
    const resetVariables = () => {
        localStorage.removeItem('theme');
        localStorage.removeItem('score');
        localStorage.removeItem('date');
        init();
    }


    //calculate avergae value over the whole year
    const getAvergae = () => {
        const daysPassed = getDaysSinceStart();
        let val = localStorage.getItem('score_alltime');
        if (isNaN(val) || isNaN(daysPassed)) {
            console.error('invalid storage item: it is NaN');
        }
        return (val / daysPassed).toFixed(1);
    }

    return (
        <>
            <div className='settings'>
                <section className='settings-theme' onClick={cycleTheme}>{Styles[currentColor].title}</section>
                <section> {localStorage.getItem('score_alltime')} </section>
                <section> {getAvergae()} </section>
                <section onClick={resetVariables}> clear Storage </section>
            </div>
        </>
    );
}