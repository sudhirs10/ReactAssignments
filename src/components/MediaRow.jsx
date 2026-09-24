import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router';
import {useMedia} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks.js';

const MediaRow = (props) => {
  const {item} = props;
  const {user} = useUserContext();
  const {deleteMedia, modifyMedia} = useMedia();
  const navigate = useNavigate();

  const canModify =
    user && (user.user_id === item.user_id || user.level_name === 'Admin');

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      await deleteMedia(item.media_id, token);

      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModify = async () => {
    try {
      const title = prompt('New title:', item.title);
      const description = prompt('New description:', item.description);

      if (title === null || description === null) {
        return;
      }

      const token = localStorage.getItem('token');

      await modifyMedia(
        item.media_id,
        {
          title,
          description,
        },
        token,
      );

      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr className="*:border *:border-gray-300 *:p-2.5 *:text-center">
      <td>
        <img
          className="h-[130px] w-[180px] object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </td>

      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>

      <td>
        <div className="flex flex-col gap-2">
          <Link
            className="rounded bg-green-600 px-3 py-2 text-white no-underline hover:bg-green-700"
            to="/single"
            state={{item}}
          >
            Show
          </Link>

          {canModify && (
            <>
              <button
                className="cursor-pointer rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                onClick={handleModify}
              >
                Modify
              </button>

              <button
                className="cursor-pointer rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired,
    media_type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediaRow;
