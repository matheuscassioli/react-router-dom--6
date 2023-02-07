import React from 'react'
import styles from "./Footer.module.css"
import {BiRegistered} from 'react-icons/bi'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}><BiRegistered className={styles.icon} size={18}/>Desenvolvido por Alura - Coded by Matheus Cassioli</p>
        </footer>
    )
}
