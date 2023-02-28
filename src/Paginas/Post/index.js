import React from 'react'
import { Link, useParams } from 'react-router-dom'
import post from "Paginas/Inicio/post.json"
import styles from "./Post.module.css" 
import PostModelo from 'Componentes/PostModelo'
import Not404 from 'Paginas/Not404'
import { IoIosSend } from "react-icons/io"

export default function Post() {

    const parametros = useParams();

    const pageState = post.find((post) => {
        return post.id === parametros.id
    })

    if (!pageState) {
        return <Not404 />
    }

    const postsRecomendados = post
        .filter((post) => post.id !== parametros.id)
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)


    return (
        <PostModelo fotoCapa={`../../Assets/Capa/${parametros.id}.png`} titulo={pageState.titulo}>
            <div className={styles.hugDivPar}>
                <p>{pageState.textoPage}</p>
                <p className={styles.link}>Segue link do deploy do projeto: <Link to={pageState.link} target='_blank'>{pageState.link} </Link></p>
                <h2 className={styles.recomendados}>Outros posts que você pode gostar</h2>
                <ul className={styles.listRecomendados}>
                    {postsRecomendados.map(k =>
                        <li key={k.id} >
                            <div className={styles.post}>
                                <img src={`/assets/posts/${k.id}/capa.png`} className={styles.capa} alt={"projeto"}/>
                                <h3>{k.titulo}</h3>
                                <Link to={`/posts/${k.id}`} className={styles.botao}>Ler mais<IoIosSend /></Link>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </PostModelo>
    )
}
