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
                    {(props.status === 'stopped' || props.status === 'pause' ) ? 'Start' : 'Stop'}
                </button>
                <button onClick={() => { props.pauseTimer() }}>
                    Pause
                </button>
                <button onClick={() => { props.resetTimer() }}>
                    Reset
                </button>
            </div>
        </aside>
    )
}

export default Stopwatch