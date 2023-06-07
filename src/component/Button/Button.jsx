import React, {useState} from 'react';
import styles from './button.module.css'

const Button = () => {
    const [count, setCount] = useState(0)
    return (
        <button className={styles.btnCount}>
            Count: {count} ()
        </button>
    );
};

export default Button;