import { useState } from 'react';
import './App.css';


//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  const [foods, setFoods] = useState(['불고기','피자','삼겹살']);
  return (
   <div className='card'>
    <ul>내가 좋아하는 음식</ul>
    {
      foods.map((food, idx) => (
        <li key={idx}>{food}</li>
      ))
    }
    <br />
    <button onClick={() => {
      const item = prompt('좋아하는 음식을 입력하세요');
      setFoods([...foods, item]);
    }}>메뉴 추가</button>
  </div>
  );
}
export default App;
