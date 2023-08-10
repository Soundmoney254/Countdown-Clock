import React, { useState, useEffect } from "react";

const CountdownClock = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        weeks: 0,
        percentage: 0,
    });

    useEffect(() => {
        const countDownDate = new Date("Aug 11, 2023 14s:59:59").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const weeks = Math.floor(days / 7);
            const percentage = Math.floor(
                ((countDownDate - now) / (countDownDate - new Date("Feb 27, 2023").getTime())) * 100
            );

            setCountdown({
                days,
                hours,
                minutes,
                seconds,
                weeks,
                percentage,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Countdown Clock</h1>
            <p>
                <strong>{countdown.weeks} weeks       </strong>
                {countdown.days} days, {countdown.hours} hours,{" "}
                {countdown.minutes} minutes, {countdown.seconds} seconds left
            </p>
            <p>
                Percentage of time left: <strong>{countdown.percentage}%</strong>
            </p>
            <div className="progress-bar-container">
                <div
                    className="progress-bar"
                    style={{ width: `${countdown.percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default CountdownClock;
