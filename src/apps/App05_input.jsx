import './App.css';
import Card2 from '../components/Card2';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';
import { useState } from 'react';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  return (
   <div>
    <CardInput name={'제임스'}/>
    <br />   
    <CardInput2 name={'마리아'} email={'maria@naver.com'}/>
  </div>
  );
}
export default App;
