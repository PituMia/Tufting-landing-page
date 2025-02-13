import React from 'react';

const TuftingComponent = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Quiénes Somos</h2>
          <p>
            En [nombre de tu empresa], nos dedicamos a crear alfombras únicas y personalizadas usando técnicas de tufting. Cada pieza está hecha a mano con materiales de la más alta calidad, asegurando no solo un producto hermoso, sino también duradero. Nuestro compromiso es con la creatividad, la originalidad y la satisfacción del cliente.
          </p>
          <h4>Nuestra Historia</h4>
          <p>
            Desde nuestros inicios, nuestra misión ha sido transformar la industria del diseño de alfombras. Nos enorgullece traer un estilo fresco y moderno al mundo del tufting, ofreciendo alfombras que cuentan historias únicas.
          </p>
        </div>
        <div className="col-md-6">
          <img src="../assets/proces.jpg" alt="Proceso de Tufting" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default TuftingComponent;