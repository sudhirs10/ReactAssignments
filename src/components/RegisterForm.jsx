import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const RegisterForm = () => {
  const {postUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    try {
      const registerResult = await postUser(inputs);
      console.log(registerResult);
    } catch (error) {
      console.error(error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Register</h1>

      <form className="mb-4 max-w-md" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-1 block" htmlFor="registeruser">
            Username
          </label>

          <input
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block" htmlFor="registeremail">
            Email
          </label>

          <input
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block" htmlFor="registerpassword">
            Password
          </label>

          <input
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="new-password"
          />
        </div>

        <button
          className="cursor-pointer rounded bg-blue-800 px-4 py-2.5 text-white hover:bg-blue-600"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
