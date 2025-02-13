import React from 'react';

const TuftingComponent = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-4">
      <img src="ruta-de-tu-imagen.jpg" alt="Tufting" className="img-fluid me-4" style={{ maxWidth: '300px' }} />
      <div className="max-w-500">
        <h2>Sobre el Tufting</h2>
        <p>
          El tufting es un proceso artesanal que involucra el uso de una gun, madejas y alfombra para crear diseños únicos. Se trabaja de manera completamente orgánica, sin el uso de materiales adicionales, lo que permite que cada pieza tenga un toque especial y personal. ¡Todo hecho a mano!
        </p>
      </div>
    </div>
  );
};

export default TuftingComponent;