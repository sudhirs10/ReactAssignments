import {useEffect} from 'react';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks.js';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div>
      <nav>
        <ul className="mb-8 flex list-none gap-4 bg-blue-800 p-4 text-white *:rounded *:px-4 *:py-2 *:hover:bg-green-600">
          <li>
            <Link to="/">Home</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <Link to="/upload">Upload</Link>
              </li>

              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
