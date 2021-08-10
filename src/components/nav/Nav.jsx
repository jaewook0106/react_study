import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location, history }) => {
  console.log('nav location', location);
  console.log('nav history', history);



  return(
    <>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <button onClick={() => history.push('/info')}>정보</button>
        </li>
        <li>
          <Link to="/sub">서브</Link>
          
        </li>
      </ul>
    </>
  )
}

export default Nav