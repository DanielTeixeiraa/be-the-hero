import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css'
import Logo from '../../assets/logo.svg'

export default function NewIncident(){
  return(
    <div className="new-incident">
    <div className="content">
      <section>
        <img src={Logo} alt="Be The Hero" />

        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

        <Link className="black-link" to="/profile">
        <FiArrowLeft size={16} color="#e02041" />
        Voltar para home
        </Link>
      </section>

      <form >
    <input type="text" placeholder="Titulo do caso"/>
    <textarea placeholder="Descrição" />
    <input type="number" placeholder="Valor em reais"/>
      <button className="button" type="submit"></button>
      </form>
    </div>
  </div>
  )
}