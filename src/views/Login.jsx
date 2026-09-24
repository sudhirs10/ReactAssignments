import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? <LoginForm /> : <RegisterForm />}

      <button
        className="cursor-pointer rounded bg-blue-800 px-4 py-2.5 text-white hover:bg-blue-600"
        onClick={() => setShowLogin(!showLogin)}
      >
        {showLogin ? 'Show Register' : 'Show Login'}
      </button>
    </>
  );
};

export default Login;
