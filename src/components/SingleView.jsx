import PropTypes from 'prop-types';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  return (
    <dialog open={item !== null}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}

      <button onClick={() => setSelectedItem(null)}>Close</button>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
