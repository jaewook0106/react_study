import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location, history }) => {
  // console.log('nav location', location);
  // console.log('nav history', history);



  return(
    <>
      <ul className="list_nav">
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <button onClick={() => history.push('/info')}>훅스를 이용한 모달</button>
        </li>
        <li>
          <Link to="/todolist">todoList</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav