import { useState, useEffect } from 'react';
import './Style.css';

const App = () => {
  const [inputNum, setInputNum] = useState('');
  const [calculatedNum, setCalculatedNum] = useState(null);
  const [operator, setOperator] = useState('');
  const [monitor, setMonitor] = useState('');

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum]);

  const takeInputNum = (num) => {
    setInputNum(inputNum + num);
  };

  const handleOperator = (op) => {
    if (inputNum !== '') {
      setCalculatedNum(parseFloat(inputNum));
      setInputNum('');
      setOperator(op);
    }
  };

  const calculate = () => {
    if (calculatedNum !== null && inputNum !== '') {
      let result;
      const currentNum = parseFloat(inputNum);
      switch (operator) {
        case '+':
          result = calculatedNum + currentNum;
          break;
        case '-':
          result = calculatedNum - currentNum;
          break;
        case '*':
          result = calculatedNum * currentNum;
          break;
        case '/':
          result = calculatedNum / currentNum;
          break;
        default:
          return;
      }
      setInputNum(result.toString());
      setCalculatedNum(null);
      setOperator('');
    }
  };

  const clearAll = () => {
    setInputNum('');
    setCalculatedNum(null);
    setOperator('');
    setMonitor('');
  };

  const toggleSign = () => {
    if (inputNum !== '') {
      setInputNum((parseFloat(inputNum) * -1).toString());
    }
  };

  const handleDecimal = () => {
    if (!inputNum.includes('.')) {
      setInputNum(inputNum + '.');
    }
  };

  return (
    <div className="calculator">
      <section className="monitor">
        <p className="out-put">{monitor}</p>
      </section>
      <section className="keyboard">
        <div className="keyboard-row">
          <button className="one-block blue" onClick={clearAll}>AC</button>
          <button className="one-block blue" onClick={toggleSign}>-/+</button>
          <button className="one-block blue">%</button>
          <button className="one-block red" onClick={() => handleOperator('/')}>/</button>
        </div>
        <div className="keyboard-row">
          <button onClick={() => takeInputNum('7')} className="one-block">7</button>
          <button onClick={() => takeInputNum('8')} className="one-block">8</button>
          <button onClick={() => takeInputNum('9')} className="one-block">9</button>
          <button className="one-block red" onClick={() => handleOperator('*')}>*</button>
        </div>
        <div className="keyboard-row">
          <button onClick={() => takeInputNum('4')} className="one-block">4</button>
          <button onClick={() => takeInputNum('5')} className="one-block">5</button>
          <button onClick={() => takeInputNum('6')} className="one-block">6</button>
          <button className="one-block red" onClick={() => handleOperator('-')}>-</button>
        </div>
        <div className="keyboard-row">
          <button onClick={() => takeInputNum('1')} className="one-block">1</button>
          <button onClick={() => takeInputNum('2')} className="one-block">2</button>
          <button onClick={() => takeInputNum('3')} className="one-block">3</button>
          <button className="one-block red" onClick={() => handleOperator('+')}>+</button>
        </div>
        <div className="keyboard-row">
          <button onClick={() => takeInputNum('0')} className="two-block">0</button>
          <button className="one-block" onClick={handleDecimal}>.</button>
          <button className="one-block red" onClick={calculate}>=</button>
        </div>
      </section>
    </div>
  );
}

export default App;
