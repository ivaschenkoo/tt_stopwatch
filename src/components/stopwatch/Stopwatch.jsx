import React from 'react';
import styles from './Stopwatch.module.css'

const Stopwatch = (props) => {
    return (
        <aside className={styles.wrapper}>
            <div className={styles.timeWrapper}>
                <span>{props.time.hours}</span>
                <span>:{props.time.minutes}:</span>
                <span>{props.time.seconds}</span>
            </div>

            <div className={styles.buttonWrapper}>
                <button onClick={() => { props.toggleTimer() }}
                        className={props.status === 'started' && styles.active} >
                    {(props.status === 'stopped' || props.status === 'pause' ) ? 'Start' : 'Stop'}
                </button>
                <button onClick={() => { props.pauseTimer() }}
                        className={props.status === 'pause' && styles.active} >
                    Pause
                    <span className={styles.info}>i</span>
                    <span className={styles.infoText}>Press twice to pause</span>
                </button>
                <button onClick={() => { props.resetTimer() }}>
                    Reset
                </button>
            </div>
        </aside>
    )
}

export default Stopwatch