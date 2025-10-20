import React, { useState } from "react";
import BillInput from "./BillInput";
import TipPercentage from "./TipPercentage";
import PeopleCounter from "./PeopleCounter";
import ResultDisplay from "./ResultDisplay";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(10);
  const [peopleCounter, setPeopleCounter] = useState(1);

  const calculateResults = () => {
    // Convierte bill a número, si está vacío usa 0
    const billAmount = bill === "" ? 0 : parseFloat(bill) || 0;
    
    if(billAmount <= 0 || peopleCounter <= 0){
      return{
        tipAmount: 0,
        totalWithTip: 0,
        tipPerPerson: 0,
        totalPerPerson: 0
      };
    };