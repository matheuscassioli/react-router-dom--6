import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Menu.module.css"
import infoNavMenu from "./Menu.nav.json"

export default function Menu() {
    const location = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
                {Object.keys(infoNavMenu).map((key, i) =>
                    <Link to={infoNavMenu[key].path} className={
                        `${styles.link} 
                         ${location.pathname === infoNavMenu[key].routePath ? styles.linkLocalizacao : ''}`}
                        key={i} >
                        {infoNavMenu[key].route}
                    </Link>
                )
                }
            </nav>
        </header>
    )
}
