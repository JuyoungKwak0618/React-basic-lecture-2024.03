import './App.css';
import Card2 from '../components/Card2';
import { useState } from 'react';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const handleClick = () => {
    setCount(count + 1);
    setNumbers([...numbers, count + 1]);    // 새로운 객체를 참조하는 방법
    // numbers.push(count + 1);     // 리액트에서 권장하는 방법 아님
    console.log(count);
  }
  const handleClick2 = () => {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <div style={{fontSize: '5rem'}}>{count}</div>
      <h3>{numbers}</h3>
      <button onClick={handleClick}>증가하기</button>
      <button onClick={handleClick2}>감소하기</button>
    </div>
  );
}
export default App;
