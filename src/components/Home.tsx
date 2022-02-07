import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div className='flex justify-center items-center'>
      <Link to="/pokemon">Start</Link>
  </div>;
};

export default Home;
