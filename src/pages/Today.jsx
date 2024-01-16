import { useState, useEffect } from 'react';
import '../styles/today.css';
import getTimeLeft from '../config/functions/getTimeLeft.js';
import init from '../config/functions/init.js';
import Confetti from 'react-confetti';
export default function Today() {
    init();
    const [todayScore, setTodayScore] = useState(JSON.parse(localStorage.getItem('score')) || 0);
    const [alltimeScore, setAlltimeScore] = useState(JSON.parse(localStorage.getItem('score_alltime')) || 0);
    const [currentTime, setCurrentTime] = useState('');
    const [isHyped, setIsHyped] = useState(false);

    useEffect(() => {
        if (todayScore === 0) { return; }
        else if (todayScore % 10 === 0) {
            setIsHyped(true);
            setTimeout(() => { setIsHyped(false); }, 2500);
        }
    }, [todayScore]);

    //update and reset value
    useEffect(() => {
        setCurrentTime(getTimeLeft());
        localStorage.setItem('score', todayScore);
        localStorage.setItem('score_alltime', alltimeScore);
    }, [alltimeScore, todayScore]);

    //upodate left time every second
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(getTimeLeft());
        }, 1000);
    }, []);

    return (
        <div className='today'>
            {isHyped ? <Confetti gravity={1} /> : null}
            <section className='today-score'>
                {todayScore}
            </section>
            <section className='today-operations'>
                <button onClick={() => { setTodayScore(prevScore => prevScore + 1); }}>+</button>
                <button onClick={() => { setTodayScore(prevScore => prevScore - 1); }}>-</button>
            </section >
            <section className='today-timeleft'>
                <span>{currentTime}</span>
            </section>
        </div >
    );
}