import React from 'react'
import AnimatedPageTransition from 'Componentes/AnimatedPageTransition/index'
import posts from "Paginas/Inicio/post.json"
import styles from "./Inicio.module.css"
import { Link } from 'react-router-dom'

export default function Inicio() {

  return (
    <AnimatedPageTransition>
      <ul className={styles.posts}>
        {posts.map((key) =>
          <li key={key.id}>
            <div className={styles.post}>
              <img
                className={styles.capa}
                src={`/assets/posts/${key.id}/capa.png`}
                alt="Imagem de capa do post"
              />
              <h3>{key.titulo}</h3>
              <Link to={`/posts/${key.id}`} className={styles.botaoLer}>Ler mais</Link>
            </div>
          </li>
        )}
      </ul>
    </AnimatedPageTransition>
  )
}
