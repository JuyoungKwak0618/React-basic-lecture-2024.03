import { FaRegTrashAlt } from "react-icons/fa";
import { Badge } from 'react-bootstrap';

export default function Todo({todo, onUpdate, onDelete}) {
  const {id, work, status} = todo;
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);
  return (
    <tr>
      <td>
        <input type='checkbox' id={id} checked={status === 'completed' }
          onChange={handleChange} className="write"/>
      </td>
      <td><label htmlFor={id} style={{ backgroundColor: '#ccd8ff' }}>{work}</label></td>
      <td><Badge bg='warning' onClick={handleDelete}><FaRegTrashAlt /></Badge></td>
    </tr>
  );
}

