import React, {useState} from 'react';
import Stopwatch from "./Stopwatch";
import {Observable} from "rxjs";


const StopwatchContainer = (props) => {
    let [timer, setTime] = useState(0);
    let [status, setStatus] = useState('stopped');
    let [mainSub, setMainSub] = useState({});
    let counter = 0;

    let time = timer > 0 ? {
        hours: `0${Math.trunc(timer / 3600)}`.slice(-2),
        minutes: `0${(Math.trunc(timer / 60)) % 60}`.slice(-2),
        seconds: `0${(timer % 60)}`.slice(-2),
    } : {
        hours: '00',
        minutes: '00',
        seconds: '00'
    }


    const sequence$ = new Observable((subscriber) => {
        const intervalId = setInterval(() => {
            subscriber.next(setTime(timer = timer + 1))
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    });

    const toggleTimer = () => {
        if (status === 'stopped' || status === 'pause') {
            setMainSub(sequence$.subscribe())
            setStatus('started')
        } else {
            resetTimer()
        }
    }

    const pauseTimer = () => {
        if (counter === 0) {
            counter++;
            setTimeout(() => {
                counter = 0;
            }, 300)
        } else if (counter === 1 && status === 'started') {
            setMainSub(mainSub.unsubscribe())
            setStatus('pause');
            counter = 0;
        }
    }

    const resetTimer = () => {
        if (status === 'started') {
            setMainSub(mainSub.unsubscribe())
        }
        setTime(0);
        setStatus('stopped')
    }

    return (
        <Stopwatch time={time}
                   status={status}
                   toggleTimer={toggleTimer}
                   pauseTimer={pauseTimer}
                   resetTimer={resetTimer} />
    )
}

export default StopwatchContainer