import React from 'react'
import styles from "./Banner.module.css"
import dados from "./DadosBanner.json"
// import circuloColors from "Assets/circulo colorido.png"
import minhafoto from "Assets/minhafoto.png"
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.left}>
                <h1 className={styles.titulo}>{dados.titulo}</h1>
                <p className={styles.texto}>{dados.apresentacao}</p>
            </div>
            <div className={styles.right}>
                {/* <img className={styles.circuloColorido} src={circuloColors} aria-hidden={true} alt="Circulo Colorido" /> */}
                <img className={styles.minhafoto} src={minhafoto} alt="foto de perfil Matheus" />
                <div className={styles.redes}>
                    <Link target='_blank' to="https://github.com/matheuscassioli" className={styles.github}></Link>
                    <Link target='_blank' to="https://www.linkedin.com/in/matheuscss/" className={styles.linkedin}></Link>
                    <Link target='_blank' to="https://api.whatsapp.com/send?phone=5511941703623" className={styles.whatsapp}></Link>
                </div>
            </div>
        </section>
    )
}
