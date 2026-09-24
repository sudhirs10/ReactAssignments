import {useUserContext} from '../hooks/contextHooks.js';

const Profile = () => {
  const {user} = useUserContext();

  return (
    <div>
      {user && (
        <>
          <h1 className="mb-4 text-3xl font-bold">Profile</h1>
          <p className="mb-2">Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
