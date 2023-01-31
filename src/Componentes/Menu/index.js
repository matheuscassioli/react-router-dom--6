import React from 'react' 
import { Link } from 'react-router-dom'
import styles from "./Menu.module.css"
import infoNavMenu from "./Menu.nav.json"

export default function Menu() {
    return (
       <header>
         <nav className={styles.navegacao}> 
                { Object.keys(infoNavMenu).map((key, i) =>
                        <Link to={infoNavMenu[key].path}  className={styles.link} key={i} >{infoNavMenu[key].route}</Link>
                    )
                } 
        </nav>
       </header>
    )
}
