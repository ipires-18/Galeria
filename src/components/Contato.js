import React from 'react'
import styles from './Contato.module.css'
import contatoImg from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Galeria | Contato" descripton="Entre em contato"/>
      <img src={contatoImg} alt="Máquina de escrever"/>
      <div>
        <h1>Entre em contato</h1> 
        <ul className={styles.dados}>
          <li>example@example.com</li>
          <li>99999-9999</li>
          <li>Rua example, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
