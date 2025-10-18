import React from 'react';
import './Calculadora.css';

const Calculadora = () => {
  return (
    <div className="calc-container">
      <div className="calc-card">
        {/* Sección Izquierda: Controles */}
        <div className="calc-left">
          <h2>Calculadora de Propinas</h2>
          <p className="calc-subtitle">Ingresa los datos para calcular la propina.</p>

          {/* Input Monto */}
          <div className="calc-group">
            <label>Monto de la cuenta</label>
            <input type="number" placeholder="Ej: 1250" />
          </div>

          {/* Selector de porcentaje */}
          <div className="calc-group">
            <label>Porcentaje de propina</label>
            <div className="tip-buttons">
              <button>10%</button>
              <button>15%</button>
              <button>20%</button>
              <input type="number" placeholder="Custom %" />
            </div>
          </div>

          {/* Número de personas */}
          <div className="calc-group">
            <label>Número de personas</label>
            <input type="number" min="1" step="1" />
          </div>
        </div>

        {/* Sección Derecha: Display */}
        <div className="calc-right">
          <h3>Resultados</h3>
          <div className="results">
            <div className="result-item">
              <span>Propina total</span>
              <strong>$0.00</strong>
            </div>
            <div className="result-item">
              <span>Cuenta total (con propina)</span>
              <strong>$0.00</strong>
            </div>
            <div className="result-item">
              <span>Propina por persona</span>
              <strong>$0.00</strong>
            </div>
            <div className="result-item">
              <span>Total por persona</span>
              <strong>$0.00</strong>
            </div>
          </div>

          <div className="buttons">
            <button className="btn-reset">Resetear</button>
            <button className="btn-share">Compartir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;