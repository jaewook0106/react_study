import React from 'react';
import Nav from '../components/nav/Nav'

const Sub = ({ location, history }) => {

  return (
    <>
      <Nav location={location} history={history} />
      <p>서브입니다.</p>
    </>
  )
}


export default Sub