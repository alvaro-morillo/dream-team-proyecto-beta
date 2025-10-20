import React, { useState } from "react";

const TipPercentage = ({ value, onChange }) => {
  const percentage = [5, 10, 15, 20, 25];
  const [isCustom, setIsCustom] = useState(false);
  const [customTip, setCustomTip] = useState("");

  const handleCustomTipChange = (e) => {
    const inputValue = e.target.value;

    setCustomTip(inputValue);

    if (inputValue !== "") {
      onChange(Number(inputValue));
      setIsCustom(true); // marcamos que es personalizado
    } else {
      setIsCustom(false);
      onChange(10); // Vuelve al valor por defecto
    }
  };

  const handlePredefinedTip = (percent) => {
    onChange(percent);
    setCustomTip(""); // Limpiamos el input personalizado
    setIsCustom(false); // Marcamos que no es personalizado
  };

  return (
    <div>
      <p>Porcentaje de propina:</p>
      <ul>
        {percentage.map((percent) => (
          <li 
            key={percent} 
            onClick={() => handlePredefinedTip(percent)}
          >
            {percent}%
          </li>
        ))}
      </ul>

      <div>
        <input
          type="number"
          placeholder="Personalizado"
          value={customTip}
          onChange={handleCustomTipChange}
        />
        %
      </div>

      <div>
        {isCustom ? `Personalizado: ${value}%` : `Predefinido: ${value}%`}
      </div>
    </div>
  );
};

export default TipPercentage;
