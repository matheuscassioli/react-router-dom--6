import React from 'react'
import AnimatedPageTransition from 'Componentes/AnimatedPageTransition/index'
import styles from "./Not404.module.css"
import Button from "../../Componentes/Button"
import notfound from "../../Assets/404.png"
import { useNavigate } from 'react-router-dom'

export default function Not404() {

  var navigate = useNavigate();
  const toHome = () => {
    navigate('/')
  }

  return (
    <AnimatedPageTransition>
      <div className={styles.hugnotfound}>
        <section className={styles.notfound}>
          <img className={styles.imgNot} src={notfound} alt={"página nao encontrada"}/>
          <h2 className={styles.page}>Ops! Pagina não encontrada</h2>
          <p className={styles.texto}>Tem certeza que digitou a página correta?</p>
          <Button onClick={() => toHome()} padding={{ "marginTop": "1rem" }}>Voltar</Button>
        </section>
      </div>
    </AnimatedPageTransition>
  )
}
