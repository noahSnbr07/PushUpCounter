import React, { useState, useEffect } from 'react';
import '../styles/today.css';
import getTimeLeft from '../config/functions/getTimeLeft.js';
export default function Today() {
    const [todayScore, setTodayScore] = useState(JSON.parse(localStorage.getItem('score')) || 0);
    const [alltimeScore, setAlltimeScore] = useState(JSON.parse(localStorage.getItem('score_alltime')) || 0);
    const [currentTime, setCurrentTime] = useState('');

    //change local variables not storage
    const manipulateScore = (operation) => {
        setTodayScore(prevScore => operation === 'increase' ? prevScore + 1 : prevScore - 1);
        setAlltimeScore(prevScore => operation === 'increase' ? prevScore + 1 : prevScore - 1);
    }

    //update and reset value
    useEffect(() => {
        setCurrentTime(getTimeLeft());
        localStorage.setItem('score', todayScore);
        localStorage.setItem('score_alltime', alltimeScore);
    }, [todayScore]);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(getTimeLeft());
        }, 1000);
    }, []);

    return (
        <div className='today'>
            <section className='today-score'>
                {todayScore}
            </section>
            <section className='today-operations'>
                <button onClick={() => { manipulateScore('increase'); }}>+</button>
                <button onClick={() => { manipulateScore('decrease'); }}>-</button>
            </section>
            <section className='today-timeleft'>
                <span>{currentTime}</span>
            </section>
        </div>
    );
}