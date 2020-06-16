import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import img from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
export default function Logon(props){
  return(
    <div className="logon-container">
    <section className="form">
      <img src={logo} alt="Be The Hero"/>
      <form action="
      ">
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="Sua ID"/>
        <button className="button" type="submit">Entrar</button>

        <Link className="black-link" to="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro</Link>

      </form>
    </section>
    <img src={img} alt="Heroes" />
    </div>
  )
}
