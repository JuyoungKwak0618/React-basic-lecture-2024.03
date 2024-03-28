
import './App.css';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

function App() {
  const name = 'James';
  const foods = ['피자','삼겹살','불고기'];
  return (
    <div>     {/* 하나의 태그로 감싸주어야 함*/}
      <h1 style={{backgroundColor:"beige"}}>name: {name}</h1>
      <hr />                       {/* = <hr></hr> , 반드시 닫는 태그가 있어야 함 */}
      <img src="https://picsum.photos/200/200" className="photo"/>
      <br />
      
    </div>
  );
}

export default App;
