import React from "react";

const Foto = ({ dados, setFotoAmplida }) => {
  return ( 
    <div className="foto" onClick={() => setFotoAmplida(dados)}>
      <img src={dados.urls.small} alt={dados.alt_description}/>
    </div>
  );
};

export default Foto;