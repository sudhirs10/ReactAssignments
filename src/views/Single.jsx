import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  const item = state.item;

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">{item.title}</h2>

      <p className="mb-2">{item.description}</p>
      <p className="mb-4">Owner: {item.username}</p>

      {item.media_type.includes('image') ? (
        <img
          className="mb-5 block max-h-[600px] w-full max-w-[800px] object-contain"
          src={item.filename}
          alt={item.title}
        />
      ) : (
        <video
          className="mb-5 block max-h-[600px] w-full max-w-[800px] object-contain"
          controls
        >
          <source src={item.filename} type={item.media_type} />
          Your browser does not support video.
        </video>
      )}

      <div>
        <button
          className="cursor-pointer rounded bg-blue-800 px-4 py-2.5 text-white hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default Single;
