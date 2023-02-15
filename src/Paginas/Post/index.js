import React from 'react'
import { Link, useParams } from 'react-router-dom'
import post from "Paginas/Inicio/post.json"
import styles from "./Post.module.css"
import PostModelo from 'Componentes/PostModelo'
import Not404 from 'Paginas/Not404'

export default function Post() {

    const parametros = useParams();

    const pageState = post.find((post) => {
        return post.id === parametros.id
    })

    if (!pageState) {
        return <Not404 />
    }

    return (
        <PostModelo fotoCapa={`../../Assets/Capa/${parametros.id}.png`} titulo={pageState.titulo}>
            <div className={styles.hugDivPar}>
                <p>{pageState.textoPage}</p>
                <p className={styles.link}>Segue link do deploy do projeto: <Link to={pageState.link} target='_blank'>{pageState.link} </Link></p>
            </div>
        </PostModelo>
    )
}
