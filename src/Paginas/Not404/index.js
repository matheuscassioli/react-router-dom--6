import React from 'react'
import AnimatedPageTransition from 'Componentes/AnimatedPageTransition/index'
import styles from "./Not404.module.css"
import Button from "../../Componentes/Button"
export default function Not404() {
  return (
    <AnimatedPageTransition>
      <div className={styles.hugnotfound}>
        <section className={styles.notfound}>
          <h1 className={styles.notfound404}>Not404</h1>
          <h2 className={styles.page}>Ops! Pagina não encontrada</h2>
          <p className={styles.texto}>Tem certeza que digitou a página correta?</p>
          <Button>Voltar</Button>
        </section>
      </div>
    </AnimatedPageTransition>
  )
}
