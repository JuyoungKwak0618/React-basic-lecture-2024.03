import './App.css';
import Card2 from '../components/Card2';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  const soon = {id:1, name: '안순현', job: 'Back-end programmer'};
  const yun = {id:2, name: '이윤주', job: 'PM'};
  const sung = {id:3, name: '박성민', job: 'Front-end programmer'};
  const ju = {id:3, name: '곽주영', job: 'assist programmer'}
  return (
    <div>
      <Card2 person={soon} />
      <br />
      <Card2 person={yun} />
      <br />
      <Card2 person={sung} />
      <br />
      <Card2 person={ju} />
    </div>
  );
}

export default App;
