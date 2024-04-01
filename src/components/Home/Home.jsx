import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>
      <h1>home for:</h1>
    </div>
  );
};

export default Home;