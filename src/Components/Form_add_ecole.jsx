import React, { useState } from 'react';
import styled from 'styled-components';

function Form_add_ecole() {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // faire quelque chose avec les données du formulaire, par exemple les envoyer à un serveur
    console.log({nom, adresse, telephone});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="adresse">Adresse:</label>
        <input
          type="text"
          id="adresse"
          value={adresse}
          onChange={(event) => setAdresse(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telephone">Téléphone:</label>
        <input
          type="text"
          id="telephone"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
      </div>
      <button type="submit">Envoyer</button>
    </Form>
  );
}


const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input[type="text"] {
    padding: 8px;
    margin-bottom: 16px;
    border: none;
    border-bottom: 2px solid #333;
  }

  button {
    padding: 8px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #222;
    }
  }
`;

export default Form_add_ecole;
