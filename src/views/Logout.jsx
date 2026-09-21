import {useEffect} from 'react';
import {useNavigate} from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  return (
    <>
      <h1>Logout</h1>
      <p>You have been logged out.</p>
    </>
  );
};

export default Logout;
