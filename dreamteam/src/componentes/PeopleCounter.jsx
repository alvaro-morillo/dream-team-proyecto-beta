import React, { useState } from "react";

const PeopleCounter = ({value,onChange}) => {


  const handlePeopleChange = (e) => {

    const newValue = parseInt(e.target.value) || 0;

    onChange(newValue);

  }


  return (
    <div className="people-counter">
      <label className="people-counterlabel">Numero de personas</label>
      <input
        className="people-counterinput"
        type="text"
        min="1"
        max="100"
        value={value}
        onChange={handlePeopleChange}
        placeholder="Ingrese el numero de personas"
      />
    </div>
  );
};

export default PeopleCounter;