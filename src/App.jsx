import { useState } from 'react'
import './App.css'

function App() {
  const [valores, setValores] = useState("");

  const calcularVal = (value) => {
    const operadores = /[+\-*/]/;

    if (valores === "" && value === "0") {
      return;
    }
    if (value === ".") {
      const separar = valores.split(operadores);
      if (separar[separar.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operadores.test(value)) {
      const ultimoChar = valores[valores.length - 1] || "";
      const anteUltChar = valores[valores.length - 2] || "";
      if (operadores.test(ultimoChar)) {
        if (ultimoChar === "-" && operadores.test(anteUltChar)) {
          setValores(valores.slice(0, -2) + value);
          return;
        }
        setValores(valores.slice(0, -1) + value);
        return;
      }
    }

    setValores(valores + value);
  };
  const calcular = () => {
    setValores(eval(valores).toString());
  };
  const borrar = () => {
    if (valores === "") {
      return;
    }

    const value = valores.slice(0, -1);
    setValores(value);
  };

  const limpiar = () => {
    setValores("");
  };

  return (
    <div className="App bg-blue-600 w-screen py-16 h-screen">
      <div className="calculadora w-4/5 lg:w-2/5 h-fit border-4  border-black mx-auto bg-red-200">
        <div className='border-8 bg-gray-500'>
        <div className="display bg-white w-full border-2 border-x-4 m-auto h-28 border-black text-5xl text-right" id="display">
          {valores || "0"}
        </div>
        </div>
        <div className="operadores">
        <div className='h-4/5'>
          {/* First row, numbers and deletes */}
          <div className='h-24 border-2 border-black bg-gray-300 flex flex-nowrap w-full'>
          <button
          className='border-2 h-full border-y-0 text-3xl font-semibold border-black w-1/5'
            id="seven"
            onClick={() => {
              calcularVal("7");
            }}
          >
            7
          </button>
          <button
          className='border-2 h-full border-y-0 text-3xl font-semibold border-black w-1/5'
            id="eight"
            onClick={() => {
              calcularVal("8");
            }}
          >
            8
          </button>
          <button
          className='border-2 h-full border-y-0 text-3xl font-semibold border-black w-1/5'
            id="nine"
            onClick={() => {
              calcularVal("9");
            }}
          >
            9
          </button>
          <button id="del" className='border-2 border-y-0 h-full border-black text-3xl font-semibold bg-red-500  w-1/5' onClick={borrar}>
            C
          </button>
          <button id="clear" className='border-2 border-y-0 text-3xl font-semibold h-full border-black bg-red-500  w-1/5' onClick={limpiar}>
            AC
          </button>
          </div>
          
          {/* Second row, multiplicator and division */}
          <div className='h-24 border-2 border-black bg-gray-300 flex flex-nowrap w-full'>
          <button
          className='border-2 border-y-0 text-3xl font-semibold border-black w-1/5'
            id="four"
            onClick={() => {
              calcularVal("4");
            }}
          >
            4
          </button>
          <button
          className='border-2 border-y-0 text-3xl font-semibold border-black w-1/5'
            id="five"
            onClick={() => {
              calcularVal("5");
            }}
          >
            5
          </button>
          <button
          className='border-2 border-y-0 text-3xl font-semibold border-black w-1/5'
            id="six"
            onClick={() => {
              calcularVal("6");
            }}
          >
            6
          </button>
          <button
          className='border-2 border-y-0 text-3xl font-semibold border-black w-1/5'
            id="multiply"
            onClick={() => {
              calcularVal("*");
            }}
          >
            *
          </button>
          <button
          className='border-2 border-y-0 text-3xl font-semibold border-black w-1/5'
            id="divide"
            onClick={() => {
              calcularVal("/");
            }}
          >
            /
          </button>
          </div>
          {/* Third row, numbers, inc and dec */}
          <div className='h-24 border-2 border-y-0 text-3xl font-semibold border-black bg-gray-300 flex flex-nowrap w-full'>
          <button
           className='border-2 border-black w-1/5'
            id="one"
            onClick={() => {
              calcularVal("1");
            }}
          >
            1
          </button>
          <button
           className='border-2  text-3xl font-semibold border-black w-1/5'
            id="two"
            onClick={() => {
              calcularVal("2");
            }}
          >
            2
          </button>
          <button
           className='border-2  text-3xl font-semibold border-black w-1/5'
            id="three"
            onClick={() => {
              calcularVal("3");
            }}
          >
            3
          </button>
          <button 
           className='border-2  text-3xl font-semibold border-black w-1/5'
            id="add"
            onClick={() => {
              calcularVal("+");
            }}
          >
            +
          </button>
          <button
           className='border-2  text-3xl font-semibold border-black w-1/5'
            id="subtract"
            onClick={() => {
              calcularVal("-");
            }}
          >
            -
          </button>
          </div>
          {/* Fourth row, 0, dot and equal */}
          <div className='h-24 border-2 border-t-0 border-black bg-gray-300 flex flex-nowrap w-full'>
            <div className="w-3/5">
          <button
            id="zero"
            className='w-1/2 h-full border-2 border-b-0 text-3xl font-semibold border-black'
            onClick={() => {
              calcularVal("0");
            }}
          >
            0
          </button>
          
          <button
            id="decimal"
            className='w-1/2 h-full border-2 border-b-0 text-3xl font-semibold border-black'
            onClick={() => {
              calcularVal(".");
            }}
          >
            .
          </button>
          </div>
          <button id="equals" className='w-2/5 border-2 border-b-0 text-3xl font-semibold border-black' onClick={calcular}>
            =
          </button>
          </div>
        </div>
          
          
          
        </div>
        
      </div>
    </div>
  );
}

export default App
