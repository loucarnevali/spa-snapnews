import { useState } from 'react';

const useNewsLikes = (initialLikes) => {
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (newsId) => {
    // Aqui você implementa a lógica para curtir ou descurtir a notícia
    setIsLiked((prevIsLiked) => !prevIsLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));

    // Exemplo de salvamento no localStorage
    const likedNews = localStorage.getItem('likedNews')
      ? JSON.parse(localStorage.getItem('likedNews'))
      : {};

    if (isLiked) {
      delete likedNews[newsId];
    } else {
      likedNews[newsId] = true;
    }

    localStorage.setItem('likedNews', JSON.stringify(likedNews));
  };

  return { likeCount, isLiked, handleLike };
};

export default useNewsLikes;
