import Image from 'next/image'
import { Are_You_Serious, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

let variableA = 0;
let variableB = 0;

let varAFilled = false;
let added = false;
let mult = false;
let division = false;
let sub = false;
let once = false;

export default function Home() {
  
  function clearCalculator(calcArea){//clears input
    added = false;
    mult = false;
    division = false;
    sub = false;
    varAFilled = false;

    variableA = 0;
    variableB = 0;
    calcArea.value = '0';
    document.getElementById('clr').style = 'background-color: blueviolet;';
  }
  function inverseNumber(calcArea){
    calcArea.value = ''+-parseFloat(calcArea.value);
    if (varAFilled){
      variableB = ''+-parseFloat(variableB);
    }else{
      variableA = ''+-parseFloat(variableA);
    }
  }
  //Handles inputs
  function buttonClick (calcArea, btn) {
    let tempCalc = (calcArea.value);
    
    //Zero stuff
    if (tempCalc == '0'){tempCalc = '';}

    if (btn.value === '0'){
      if (tempCalc[0] === '0' || tempCalc === '0'){
        alert(tempCalc);
        return;
      }
    }else if (btn.value === '0' && tempCalc != '0'){
      tempCalc += btn.value;
    }
    //
    //Positives
    tempCalc += btn.value;
    calcArea.value = tempCalc;
    if (!varAFilled){
      variableA = tempCalc;
    }else{
      variableB = tempCalc;
    }
    return;
    
}

  function addFunc(calcArea){
    calcArea.value = '0';
    varAFilled = true;
    added = true;
  }
  function multiFunc(){
    alert("bals");
  }
  //Final calculation
  function summFunc(calcArea){
    if (added){
      calcArea.value = ''+(parseFloat(variableA) + parseFloat(variableB));
      varAFilled = false;
      document.getElementById('clr').style = 'background-color: red;';
      if (calcArea.value.includes('N') || calcArea.value == null){calcArea.value = 'Error';}
      return;
    }
    if (sub){
      calcArea.value = ''+(parseFloat(variableA) - parseFloat(variableB));
      varAFilled = false;
      document.getElementById('clr').style = 'background-color: red;';
      if (calcArea.value.includes('N') || calcArea.value == null){calcArea.value = 'Error';}
      return;
    }
    if (division){
      calcArea.value = ''+(parseFloat(variableA) / parseFloat(variableB));
      varAFilled = false;
      document.getElementById('clr').style = 'background-color: red;';
      if (calcArea.value.includes('N') || calcArea.value == null){calcArea.value = 'Error';}
      return;
    }
    if (mult){
      calcArea.value = ''+(parseFloat(variableA) * parseFloat(variableB));
      varAFilled = false;
      document.getElementById('clr').style = 'background-color: red;';
      if (calcArea.value.includes('N') || calcArea.value == null){calcArea.value = 'Error';}
      return;
    }
  }
  //
  function subtractFunc(calcArea){
    calcArea.value = '0';
    varAFilled = true;
    sub = true;
  }
  function decimalPt(calcArea){
    if (!calcArea.value.includes('.')){
      calcArea.value += '.';
    }
  }
  function piNum(calcArea){
    calcArea.value = ''+Math.PI;
    if (!varAFilled){
      variableA = Math.PI;
    }else{
      variableB = Math.PI;
    }
  }
  function divisionFunc(calcArea){
    calcArea.value = '0';
    varAFilled = true;
    division = true;
  }
  function multFunc(calcArea){
    calcArea.value = '0';
    varAFilled = true;
    mult = true;
  }
  function manualEntry(calcArea){
    if (!varAFilled){
      variableA = calcArea.value;
    }else{
      variableB = calcArea.value;
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <div className="calculatorMainArea">
          <textarea id='_calculationArea' placeholder='0' onChange={() => manualEntry(document.getElementById("_calculationArea"))}></textarea>
          <grid>
            <div className='gridC'>
              <button id='clr' className="utilityButton" onClick={() => clearCalculator(document.getElementById("_calculationArea"))}>AC</button>
              <button className="utilityButton" onClick={() => piNum(document.getElementById("_calculationArea"))}>π</button>
              <button className="utilityButton" onClick={() => inverseNumber(document.getElementById("_calculationArea"))}>Inverse</button>
            </div>

            <div className='gridC'>
              <button id='btn1' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn1"))} value='0'>0</button>
              <button id='btn3' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn3"))} value='2'>2</button>
              <button id='btn2' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn2"))} value='1'>1</button>
              <button id='btn4' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn4"))} value='3'>3</button>
              <button id='btn5' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn5"))} value='4'>4</button>
              <button id='btn6' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn6"))} value='5'>5</button>
              <button id='btn7' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn7"))} value='6'>6</button>
              <button id='btn8' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn8"))} value='7'>7</button>
              <button id='btn9' className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn9"))} value='8'>8</button>
              <button id='btn10'className="numberButton" onClick={() => buttonClick(document.getElementById("_calculationArea"), document.getElementById("btn10"))} value='9'>9</button>
              
              {/* Arithmetic operations below */}
              <button id='addition' className="operButton" onClick={() => addFunc(document.getElementById("_calculationArea"))}>+</button>
              <button id='subtraction' className="operButton" onClick={() => subtractFunc(document.getElementById("_calculationArea"))}>-</button>
              <button id='division' className="operButton" onClick={() => divisionFunc(document.getElementById("_calculationArea"))}>÷</button>
              <button id='multiplication' className="operButton" onClick={() => multFunc(document.getElementById("_calculationArea"))}>×</button>
              <button id='decimal' className="operButton" onClick={() => decimalPt(document.getElementById("_calculationArea"))}>.</button>
              <button id='summary' className="operButton" onClick={() => summFunc(document.getElementById("_calculationArea"))}>=</button>
            </div>
          </grid>
        </div>

    </main>
  )
}