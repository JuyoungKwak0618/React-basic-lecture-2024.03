import { React } from 'react';
import { Link } from 'react-router-dom';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

export default function Navbar() {
  return (
    <nav>
      <Link to='/' style={{marginRight: '10px'}}>Home</Link>
      <Link to='/board'>Board</Link>
    </nav>
  );
}

