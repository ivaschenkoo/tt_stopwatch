import React from 'react';
import styles from './Stopwatch.module.css'

const Stopwatch = (props) => {
    return (
        <aside>
            <span>{props.time.hours}</span>
            <span>{props.time.minutes}</span>
            <span>{props.time.seconds}</span>

            <div>
                <button onClick={() => { props.toggleTimer() }}>
                    Start
                </button>
                <button onClick={() => { props.pauseTimer() }}>
                    Pause
                </button>
                <button>Reset</button>
            </div>
        </aside>
    )
}

export default Stopwatch