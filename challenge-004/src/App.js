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
  margin: auto;
  height: 28px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
`

const Pad = styled.section`
  box-sizing: border-box;
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Numbers = styled.button`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 8px;
`

function App() {
  const [state, setState] = useState({
    nums: [],
  })
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const setOperation = ({ target }) => {
    const num = parseFloat(target.id);
    const lastNum = state.nums[state.nums.length - 1];
    let newNum = num;
    if (typeof num === 'number' && lastNum) {
      newNum = parseFloat(`${lastNum}${num}`);
    }
    setState({ ...state, nums: [...state.nums, newNum]})
    console.log(state);
  }

  return (
    <Wrapper>
      <Visor>{0}</Visor>
      <Pad>
        {numbers.map((num) => (
          <Numbers key={num} id={num} onClick={ setOperation }>
            {num}
          </Numbers>
        ))}
      </Pad>
    </Wrapper>
  );
}

export default App;
