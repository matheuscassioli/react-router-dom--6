import React from 'react'
import AnimatedPageTransition from 'Componentes/AnimatedPageTransition/index'
import posts from "Paginas/Inicio/post.json"
import styles from "./Inicio.module.css"
import Post from 'Componentes/Post/index'

export default function Inicio() {
  return (
    <AnimatedPageTransition>
      <ul className={styles.posts}>
        {posts.map((key) =>
          <li key={key.id}>
            <Post post={key} />
          </li>)}
      </ul>
    </AnimatedPageTransition>
  )
}
