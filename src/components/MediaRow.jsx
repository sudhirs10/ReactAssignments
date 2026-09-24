import PropTypes from 'prop-types';
import {Link} from 'react-router';

const MediaRow = (props) => {
  const {item} = props;

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
        <Link
          className="rounded bg-green-600 px-3 py-2 text-white no-underline hover:bg-green-700"
          to="/single"
          state={{item}}
        >
          Show
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
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
