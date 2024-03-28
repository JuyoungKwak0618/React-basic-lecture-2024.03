import './App.css';
import Card2 from '../components/Card2';
import { useState } from 'react';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  const [name, setName] = useState('제임스');
  const [content, setConent] = useState('');
  const handleClick = () => {
    const newName = prompt('이름을 입력하세요.');
    setName(newName);
  }
 
  return (
    <div className='card'>
      <div style={{fontSize: '5rem'}}>{name}</div>
      <h3>{content}</h3>
      <br />
      <button onClick={handleClick}>이름 바꾸기</button>
      <br /> 
      {/* <button onClick={ () => {
        const newName = prompt('이름을 입력하세요.');
        setName(newName);
      }}>이름 바꾸기2</button> */}
      <br />
      <input style={{padding: '5px', margin:'5px'}} type="text" onChange={event => {
        setConent(event.target.value);
      }}/>
    </div>
  );
}
export default App;
