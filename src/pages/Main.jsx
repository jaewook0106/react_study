import React from 'react';
import Nav from '../components/nav/Nav'

const Main = ({ location, history }) => {
  console.log('location', location);
  console.log('history', history);
  return (
    <>
      <Nav location={location} history={history} />
      <p>메인입니다.</p>
    </>
  )
}

export default Main