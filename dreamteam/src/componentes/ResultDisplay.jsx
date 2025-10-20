import React from "react";

const ResultDisplay = ({ results }) => {
  // Validación más robusta
  if (!results || typeof results !== 'object') {
    return (
      <div>
        <h3>Resultados</h3>
        <p>Ingresa los datos para calcular</p>
      </div>
    );
  }

  // Función segura para formatear números
  const formatCurrency = (value) => {
    if (typeof value !== 'number' ||  isNaN(value)) {
      return "0.00";
    }
    return value.toFixed(2);
  };

  return (
    <div>
      <h3>Resultados</h3>
      <p>
        💰 Propina total: <strong>${formatCurrency(results.tipAmount)}</strong>
      </p>
      <p>
        💵 Total con propina:{" "}
        <strong>${formatCurrency(results.totalWithTip)}</strong>
      </p>
      <p>
        👤 Propina por persona:{" "}
        <strong>${formatCurrency(results.tipPerPerson)}</strong>
      </p>
      <p>
        👥 Total por persona:{" "}
        <strong>${formatCurrency(results.totalPerPerson)}</strong>
      </p>
    </div>
  );
};

export default ResultDisplay;