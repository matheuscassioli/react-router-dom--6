import React from 'react'
import styles from "./Banner.module.css"
import dados from "./DadosBanner.json"
import circuloColors from "Assets/circulo colorido.png"
import minhafoto from "Assets/minhafoto.png"

export default function Banner() {
    return (
    <section className={styles.banner}>
        <div className={styles.left}>
            <h1 className={styles.titulo}>{dados.titulo}</h1>
            <p className={styles.texto}>{dados.apresentacao}</p>
        </div>
        <div className={styles.right}>
            <img className={styles.circuloColorido} src={circuloColors} aria-hidden={true} alt="Circulo Colorido" />
            <img className={styles.minhafoto} src={minhafoto} alt="foto de perfil Matheus"/>
        </div>
    </section>
    )
}
