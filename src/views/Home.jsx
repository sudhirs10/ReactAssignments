import MediaRow from '../components/MediaRow';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">My Media</h2>

      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Thumbnail
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Title
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Description
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Owner
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Created
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Size
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Type
            </th>
            <th className="border border-gray-300 bg-blue-800 p-2.5 text-center text-white">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
