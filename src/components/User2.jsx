import '../apps/App.css'
import { useState } from 'react';

//  1. tag 이름 - 대문자로 시작
//  2. JS - {}     {name}
//  3. 하나의 태그

export default function User() {
  const initUsers = [
    {id:1, name:'admin', email:'admin@naver.com'},
    {id:2, name:'james', email:'james@naver.com'}
  ];
  const [users, setUsers] = useState(initUsers);

  const [form, setForm] = useState({id: '' , name: '', email: ''});
  const handleSubmit = (event) => {
    event.preventDefault();     // submit button을 누르면 페이지가 자동적으로 바뀌는 것을 방지
    const existUser = users.find(user => user.id == form.id);
    const newUsers = [];
    if (existUser) {
      for(let user of users) 
        if (user.id == form.id) 
          newUsers.push(form);
         else 
          newUsers.push(user);
          setUsers(newUsers);
    } else {
      setUsers([...users, form]);
    }
  
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({...form, [name]: value });
  } 
  
  return (
    <div className='card'>
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>name</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />
      <form onSubmit={handleSubmit}>
      <label htmlFor='id'>아이디:</label>
        <input type='text' name='id' value={form.id} 
          onChange={handleChange} 
        /><br />
        <label htmlFor='name'>이름:</label>
        <input type='text' name='name' value={form.name} 
          onChange={handleChange} 
        /><br />
         <label htmlFor='email'>이메일:</label>
         <input type='text' name='email' value={form.email} 
          onChange={handleChange} 
        /><br />
        <button>추가/수정</button>
      </form>
      <button onClick={() => {
         const id = prompt('삭제할 ID를 입력하세요');
         setUsers(users.filter(user => user.id != id));
      }}>삭제</button>
    </div>
  );
}

