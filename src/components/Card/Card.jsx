import PropTypes from 'prop-types';

import TextLimit from '../TextLimit/TextLimit';
import {
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  ErrorContainer,
} from './CardStyled';
import { Link } from 'react-router-dom';
import { likePost } from '../../services/postsServices';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Card({
  top,
  title,
  text,
  likes,
  comments,
  banner,
  actions = false,
  id,
  userId,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);
  const [showAuthError, setShowAuthError] = useState(false);

  useEffect(() => {
    const userLiked = likes.some((like) => like.userId === userId);
    setIsLiked(userLiked);
  }, [likes, userId]);

  const handleLike = async () => {
    try {
      const token = Cookies.get('token');

      if (!token) {
        console.log('Unauthenticated user. Log in to enjoy the news.');
        setShowAuthError(true);
        return;
      }

      const response = await likePost(id, userId);

      if (response && response.data) {
        const { message } = response.data;

        if (
          message === 'Like done successfully' ||
          message === 'Like successfully removed'
        ) {
          setIsLiked(!isLiked);
          setLikeCount((prevCount) =>
            isLiked ? prevCount - 1 : prevCount + 1,
          );
        }
      }
    } catch (error) {
      console.error('Error liking news:', error);
    }
  };

  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={top}>
            {actions && (
              <span>
                <Link to={`/manage-news/edit/${id}`}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <i className="fa-regular fa-trash-can"></i>
                </Link>
              </span>
            )}
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </CardHeader>

          <CardFooter>
            <section onClick={handleLike}>
              <i
                className="fa-regular fa-thumbs-up"
                style={{ color: isLiked ? '#f17c17' : 'initial' }}
              ></i>
              <span>{likeCount}</span>
            </section>

            <section>
              <i className="fa-sharp fa-regular fa-comment"></i>
              <span>{comments?.length}</span>
            </section>

            {showAuthError && (
              <ErrorContainer>
                Unauthenticated user. Log in to enjoy the news.
              </ErrorContainer>
            )}
          </CardFooter>
        </div>

        <img src={banner} alt="" />
      </CardBody>
    </CardContainer>
  );
}

// PropTypes Validation
Card.propTypes = {
  top: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  banner: PropTypes.string,
  likes: PropTypes.arrayOf(PropTypes.any),
  comments: PropTypes.arrayOf(PropTypes.any),
  actions: PropTypes.bool,
  id: PropTypes.string,
  userId: PropTypes.string,
};
