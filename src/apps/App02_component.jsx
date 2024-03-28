import './App.css';
import Card from '../components/Card';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  return (
    <div>
      <Card />    
      <br />
      <Card />
    </div>
  );
}

export default App;
