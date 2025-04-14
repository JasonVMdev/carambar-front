import React, { useState } from 'react';
import './App.css';
import logo from './assets/carambar.webp';

function App() {
  const [blagues, setBlagues] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomBlagues = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://carambar-back-5vpw.onrender.com/blagues/random');
      const data = await res.json();
      setBlagues(data);
    } catch (err) {
      console.error('Erreur :', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1><img src={logo} alt="logo carambar" /></h1>
      <button type="button" onClick={getRandomBlagues} disabled={loading}>
        {loading ? 'Chargement...' : 'Une blague !'}
      </button>
      {blagues && (
        <div className="blagues">
          <p><strong>{blagues.question}</strong></p>
          <p>Réponse : {blagues.answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
