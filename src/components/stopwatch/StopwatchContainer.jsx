import React, {useState} from 'react';
import Stopwatch from "./Stopwatch";
import {Observable} from "rxjs";


const StopwatchContainer = (props) => {
    let [timer, setTime] = useState(0);

    const sequence$ = new Observable((subscriber) => {
        const intervalId = setInterval(() => {
            subscriber.next(setTime(timer = timer + 1))
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    });

    return <Stopwatch seq={sequence$} />
}

export default StopwatchContainer