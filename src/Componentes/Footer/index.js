import React from 'react'
import styles from "./Footer.module.css"
import {BiRegistered} from 'react-icons/bi'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <p className={styles.texto}><BiRegistered className={styles.icon} size={18}/>Desenvolvido por Alura - Coded by Matheus Cassioli</p>
        </footer>
    )
}
