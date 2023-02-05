import { useState } from "react";
import styles from "./Counter.module.scss"
const Counter = () => {
    const [counter, setCounter] = useState<number>(0)


    return (
        <div>
            <p>{counter}</p>
            <button className={styles.btn} onClick={() => setCounter(counter + 1)} >+</button>
        </div>
    );
};

export default Counter;