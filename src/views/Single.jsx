import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  const item = state.item;

  return (
    <>
      <h2>{item.title}</h2>

      <p>{item.description}</p>
      <p>Owner: {item.username}</p>

      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video controls>
          <source src={item.filename} type={item.media_type} />
          Your browser does not support video.
        </video>
      )}

      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  );
};

export default Single;
