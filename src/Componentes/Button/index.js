import React from 'react'
import styles from "./Button.module.css"

export default function Button({ children, padding, onClick }) {
    return (
        <button onClick={onClick} className={styles.botaoLer} style={padding}>{children}</ button>
    )
}
