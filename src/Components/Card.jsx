import React from 'react';
import Form_add_ecole from './Form_add_ecole';
import styled from 'styled-components';


function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <CardContainer>
      <h1>Ajouter une école</h1>
      <Card>
        <Form_add_ecole></Form_add_ecole>
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 80%;
  max-width: 500px;
  margin: auto;
  background-color: #f8f8f8;
  padding: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;



export default App;
