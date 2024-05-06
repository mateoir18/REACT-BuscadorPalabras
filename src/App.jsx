import { useState } from 'react';
import './App.css';
import { Lista } from './Lista';

function App() {
  const [palabra, setPalabra] = useState("");

  const filtrarLista = (palabra) => {
    return ["manzana", "kiwi", "pera", "melocoton", "platano"].filter(item => item.startsWith(palabra));
  };

  return (
    <>
      <input type='text' value={palabra} onChange={(e) => setPalabra(e.target.value)} />
      <Lista palabra={palabra} filtrarLista={filtrarLista} />
    </>
  );
}

export default App;
