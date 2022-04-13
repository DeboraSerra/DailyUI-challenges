import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
box-sizing: border-box;
  width: 500px;
  border: 1px solid black;
  margin: auto;
  height: 500px;
  padding: 32px;
`

const Visor = styled.section`
  box-sizing: border-box;
  width: 90%;
  margin: 12px auto;
  height: 48px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
`

const Pad = styled.section`
  box-sizing: border-box;
  width: 90%;
  margin: 12px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Numbers = styled.button`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin: 8px;
`

function App() {
  const [state, setState] = useState({
    num1: '',
    num2: '',
    operator: '',
    result: '',
  })
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ['+', '-', '/', '*'];

  const setOperation = ({ target: { id } }) => {
    const { num1, num2, operator, result } = state;
    if (!operator && !operators.includes(id)) {
      setState({ ...state, result: '', num1: num1 ? num1 + id : id });
    } if (operators.includes(id)) {
      if (result) {
        setState({ ...state, result: '', num1: result, operator: id });
      } else setState({ ...state, operator: id});
    } if (operator && !operators.includes(id)) {
      setState({ ...state, num2: num2 ? num2 + id : id });
    } if (id === '=') {
      switch (operator) {
      case '+':
        setState({ num1: '',
          num2: '',
          operator: '',
          result: parseFloat(num1) + parseFloat(num2) });
        break;
      case '-':
        setState({ num1: '',
          num2: '',
          operator: '',
          result: parseFloat(num1) - parseFloat(num2) });
        break;
      case '/':
        setState({ num1: '',
          num2: '',
          operator: '',
          result: parseFloat(num1) / parseFloat(num2) });
        break;
      case '*':
        setState({ num1: '',
          num2: '',
          operator: '',
          result: parseFloat(num1) * parseFloat(num2) });
        break;
      default: return null;
      }
    }
  }

  return (
    <Wrapper>
      <Visor>
        <input
          type="number"
          name="num1"
          value={ state.num1 }
          style={{
            width: '32px',
            padding: '8px',
            fontSize: '1.1rem',
          }}
          readOnly
        />
        <input
          type="text"
          name="operator"
          value={ state.operator }
          style={{
            width: '32px',
            padding: '8px',
            fontSize: '1.1rem',
          }}
          readOnly
        />
        <input
          type="number"
          name="num2"
          value={ state.num2 }
          style={{
            width: '32px',
            padding: '8px',
            fontSize: '1.1rem',
          }}
          readOnly
        />
        <input
          type="text"
          value={ state.result }
          style={{
            width: '32px',
            padding: '8px',
            fontSize: '1.1rem',
          }}
          readOnly
        />
      </Visor>
      <Pad>
        {numbers.map((num) => (
          <Numbers
            key={num}
            id={num}
            onClick={ setOperation }
          >
            {num}
          </Numbers>
        ))}
      </Pad>
      <Pad>
        {operators.map((op) => (
          <Numbers
            key={op}
            id={op}
            onClick={ setOperation }
          >
            {op}
          </Numbers>
        ))}
        <Numbers id="=" onClick={ setOperation }>=</Numbers>
      </Pad>
    </Wrapper>
  );
}

export default App;
