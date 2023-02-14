import React, { useRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const TimerHeader = ({ title, timer, setTimer, extend, setSpotTaken, setSpotLeft }) => {
    const Ref = useRef(null);

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / 1000 / 60 / 60 / 24);
        return {
            total, days, hours, minutes, seconds
        };
    }
  
    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer({days, hours, minutes, seconds})
        }
    }

    const clearTimer = (e) => {  
        setTimer({days: 0, hours: 0, minutes: 0, seconds: 0})
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    }
  
    const getDeadTime = (endDay) => {
        let deadline = new Date();
        deadline.setDate(deadline.getDate() + (((1 + endDay - deadline.getDay()) % endDay) || endDay));
        deadline = new Date(parseInt(deadline.getMonth() + 1) + "/" + deadline.getDate() + "/" + deadline.getFullYear());
        deadline.setSeconds(deadline.getSeconds());
        return deadline;
    }

    const getEndDay = () => {
        if (extend > 0) {
            return parseInt(extend);
        } else {
            return 7;
        }
    }

    const getWeekNumber = () => {
        const currentDate = new Date();
        const adjustedDate = currentDate.getDate()+ currentDate.getDay();
        const prefixes = ['0', '1', '2', '3', '4', '5'];
        const weekNumber = parseInt(prefixes[0 | adjustedDate / 7])+1;
        const spotTaken = [
            [0, 0, 0, 0, 0, 0, 0],
            [17, 3, 5, 7, 11, 14, 16],
            [16, 1, 5, 8, 10, 13, 14],
            [18, 2, 5, 10, 12, 14, 15],
            [17, 2, 4, 9, 11, 15, 16],
            [18, 3, 6, 9, 13, 15, 17]
        ];
        // console.log(weekNumber, currentDate.getDay());
        setSpotTaken(spotTaken[weekNumber][currentDate.getDay()]);
        setSpotLeft(20 - spotTaken[weekNumber][currentDate.getDay()])
    }

    useEffect(() => {
        const endDay = getEndDay();
        clearTimer(getDeadTime(endDay));
        getWeekNumber();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const timerBody = {
        width: 80,
        backgroundColor: "#f00",
        padding: "3px 15px",
        borderRadius: 4,
        margin: "0 3px",
        color: "#fff"
    }

    const timerHead = {
        fontSize: 30
    }

    return ( 
        <div style={{backgroundColor: "#008000", padding: 10}}>
            <center>
                <span style={{
                    fontSize: isMobile ? 16 : 20,
                    color: "#fff",
                    fontWeight: "bold"
                }}>
                    {title}
                </span>
                <div className="d-flex justify-content-center">
                    <div style={timerBody}>
                        <div style={timerHead}><b>{timer.days}</b></div>
                        <div>{timer.days > 1 ? "Days" : "Day"}</div>
                    </div>
                    <div style={timerBody}>
                        <div style={timerHead}><b>{timer.hours}</b></div>
                        <div>{timer.hours > 1 ? "Hours" : "Hour"}</div>
                    </div>
                    <div style={timerBody}>
                        <div style={timerHead}><b>{timer.minutes}</b></div>
                        <div>{timer.minutes > 1 ? "Minutes" : "Minute"}</div>
                    </div>
                    <div style={timerBody}>
                        <div style={timerHead}><b>{timer.seconds}</b></div>
                        <div>{timer.seconds > 1 ? "Seconds" : "Second"}</div>
                    </div>
                </div>
            </center>
        </div>
     );
}
 
export default TimerHeader;