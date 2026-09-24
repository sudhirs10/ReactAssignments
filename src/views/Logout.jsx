import {useEffect} from 'react';
import {useUserContext} from '../hooks/contextHooks.js';

const Logout = () => {
  const {handleLogout} = useUserContext();

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Logout</h1>
      <p>You have been logged out.</p>
    </>
  );
};

export default Logout;
