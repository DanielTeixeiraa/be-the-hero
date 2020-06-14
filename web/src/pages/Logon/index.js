import React from 'react';

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
        <button type="submit">Entrar</button>

        <a href="/register">Não tenho cadastro</a>

      </form>
    </section>
    <img src={img} alt="Heroes" />
    </div>
  )
}
