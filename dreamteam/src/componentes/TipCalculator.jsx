import { useState } from "react";
import BillInput from "./BillInput"
import PeopleCounter from "./PeopleCounter"
import ResultDisplay from "./ResultDisplay"
import TipPercentage from "./TipPercentage"

export default function TipCalculator(){

    const [bill,setBill]= useState(0);

    return(
        <div className="calculator">
             <h1>Calculadora de Propinas</h1>

             // enviando los props al componente hijo
             <BillInput value={bill} onChange={setBill}/> 
        </div>
    )
}