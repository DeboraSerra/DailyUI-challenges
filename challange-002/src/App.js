import React, { useState } from 'react';
import './App.css';

function App() {
  const [card, setCard] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'card':
      const updateCard = value;
      setCard(updateCard);
      break;
    case 'name':
      setName(value.toUpperCase());
      break;
    default:
      return;
    }
  }
  return (
    <div className="App">
      <input type="text" value={ card } onChange={ handleChange } name="card" placeholder="Card number" />
      <input type="text" value={ name } onChange={ handleChange } name="name" placeholder="Full name" />
      <input type="month" />
    </div>
  );
}

export default App;
