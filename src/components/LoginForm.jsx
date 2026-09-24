import {useUserContext} from '../hooks/contextHooks.js';
import useForm from '../hooks/formHooks';

const LoginForm = () => {
  const {handleLogin} = useUserContext();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Login</h1>

      <form className="mb-4 max-w-md" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-1 block" htmlFor="loginuser">
            Username
          </label>

          <input
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block" htmlFor="loginpassword">
            Password
          </label>

          <input
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>

        <button
          className="cursor-pointer rounded bg-blue-800 px-4 py-2.5 text-white hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
