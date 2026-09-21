import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          const userData = await getUserByToken(token);
          setUser(userData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <h2>Profile</h2>

      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </>
  );
};

export default Profile;
