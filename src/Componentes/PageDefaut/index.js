import Banner from 'Componentes/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageDefault() {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}
