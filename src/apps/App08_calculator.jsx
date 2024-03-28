import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(""); // 상태 변수 이름 변경
  const clearCal = () => {
    setNumber(""); // 클리어
  }

  const handleButtonClick = (value) => {
    if (value == "=") {
      try {
        const result = eval(number); 
        setNumber(result);
      } catch (error) {
        setNumber("Error");
      }
    } else if (value == "C") {
      clearCal();
    } else if (value == "B") {
      // 뒤로 가기
      setNumber(prevNum => prevNum.slice(0, -1));
    } else {
      setNumber(prevNum => prevNum + value);
    }
  }

  return (
    <div style={{ margin: '50px' }}>
      <form>
        <table>
          <tbody>
            <tr>
              <td name="result" colSpan="4">{number}</td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleButtonClick("C")}  value="C">C</button></td>
              <td><button type="button" onClick={() => handleButtonClick("/")}  value="/">÷</button></td>
              <td><button type="button" onClick={() => handleButtonClick("*")}  value="*">×</button></td>
              <td><button type="button" onClick={() => handleButtonClick("-")}  value="-">－</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleButtonClick("7")}  value="7">7</button></td>
              <td><button type="button" onClick={() => handleButtonClick("8")}  value="8">8</button></td>
              <td><button type="button" onClick={() => handleButtonClick("9")}  value="9">9</button></td>
              <td rowSpan="2"><button type="button" onClick={() => handleButtonClick("+")} value="+">＋</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleButtonClick("4")}  value="4">4</button></td>
              <td><button type="button" onClick={() => handleButtonClick("5")}  value="5">5</button></td>
              <td><button type="button" onClick={() => handleButtonClick("6")}  value="6">6</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleButtonClick("1")} value="1">1</button></td>
              <td><button type="button" onClick={() => handleButtonClick("2")} value="2">2</button></td>
              <td><button type="button" onClick={() => handleButtonClick("3")} value="3">3</button></td>
              <td rowSpan="2"><button type="button" onClick={() => handleButtonClick("=")} value="=" style={{ height: '105px' }}>＝</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleButtonClick("B")} value="B">Back</button></td>
              <td colSpan="2"><button type="button" onClick={() => handleButtonClick("0")} value="0" style={{ width: '159px' }}>0</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
export default App;