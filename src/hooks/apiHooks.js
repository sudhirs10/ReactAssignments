import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaUrl = import.meta.env.VITE_MEDIA_API + '/media';
        const authUrl = import.meta.env.VITE_AUTH_API + '/users/';

        const mediaItems = await fetchData(mediaUrl);

        const mediaWithUsers = await Promise.all(
          mediaItems.map(async (item) => {
            const user = await fetchData(authUrl + item.user_id);

            return {
              ...item,
              username: user.username,
            };
          })
        );

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
