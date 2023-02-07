import React from 'react'
import styles from "./Post.module.css"    
import oi from "./../../Assets/Capa/1.png"

export default function Post({ post }) {  

    return (
        <div className={styles.post}>
        <img className={styles.capa} src={oi} alt="Imagem de capa" />
            <h3>{post.titulo}</h3>
            <button className={styles.botaoLer}>Ler mais</button>
        </div>
    )
}
