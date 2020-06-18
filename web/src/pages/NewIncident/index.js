import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import Logo from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");
  const history = useHistory();
  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile')
    } catch (err) {
      alert("erro");
    }
  }
  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={Logo} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="black-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo do caso"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em reais"
          />
          <button className="button" type="submit"></button>
        </form>
      </div>
    </div>
  );
}
