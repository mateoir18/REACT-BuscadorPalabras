import React from 'react';

export const Lista = ({ palabra, filtrarLista }) => {
  const listaFiltrada = filtrarLista(palabra);

  
  const elementosFiltrados = listaFiltrada.map((item, index) => (
    <p key={index}>{item}</p>
  ));

  return (
    <div>
      {elementosFiltrados}
    </div>
  );
};
