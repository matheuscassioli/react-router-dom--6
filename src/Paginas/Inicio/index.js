import React from 'react'
import Banner from 'Componentes/Banner'
import AnimatedPageTransition from 'Componentes/AnimatedPageTransition/index'

export default function Inicio() {
  return (
    <AnimatedPageTransition>
      <Banner />
    </AnimatedPageTransition>
  )
}
