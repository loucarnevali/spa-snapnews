import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { likePost } from '../services/postsServices';
import { userLogged } from '../services/userServices';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await userLogged();
        setUser(data); // Assumindo que a resposta é o objeto do usuário
        setLikes(data.likes || []); // Ajustando para buscar likes do objeto retornado
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const toggleLike = async (newsId) => {
    try {
      await likePost(newsId, user.id);
      setLikes((prevLikes) => {
        if (prevLikes.includes(newsId)) {
          return prevLikes.filter((id) => id !== newsId);
        } else {
          return [...prevLikes, newsId];
        }
      });
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, likes, toggleLike }}>
      {children}
    </UserContext.Provider>
  );
}

// PropTypes Validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
