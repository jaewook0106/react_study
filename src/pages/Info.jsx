import React from 'react';
import Nav from '../components/nav/Nav'

const Info = ({ location, history }) => {

  return (
    <>
      <Nav location={location} history={history} />
      <p>정보 페이지입니다.</p>
    </>
  )
}


export default Info;