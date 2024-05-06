import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date());
        }, 1000);
    })
    function formatHours() {
        let hours = time.getHours();
        return (hours < 10 ? '0' : '') + hours;
    }
    function formatMinutes() {
        let minutes = time.getMinutes();
        return (minutes < 10 ? '0' : '') + minutes;
    }
    function formatSeconds() {
        let seconds = time.getSeconds();
        return (seconds < 10 ? '0' : '') + seconds;
    }
    return (
        <div className="container">
            <div className="container__clock">
                <div className="container__clock-content">
                    <span className="hours">{formatHours()}</span>
                    <span>:</span>
                    <span className="minutes">{formatMinutes()}</span>
                    <span>:</span>
                    <span className="seconds">{formatSeconds()}</span>
                </div>
            </div>
        </div>
    );
}

export default DigitalClock;
