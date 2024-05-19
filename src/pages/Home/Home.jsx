import { useState, useEffect } from 'react';

import { HomeBody, HomeHeader } from './HomeStyled';
import { getAllPosts, getTopPost } from '../../services/postsServices';
import Card from '../../components/Card/Card';
import NewsSkeleton from '../../components/NewsSkeleton/NewsSkeleton';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // async function findPost() {
  //   const postsResponse = await getAllPosts();
  //   setPosts(postsResponse.data.results);

  //   const topPostResponse = await getTopPost();
  //   setTopPost(topPostResponse.data.post);
  // }
  async function findPost() {
    try {
      const postsResponse = await getAllPosts();
      const topPostResponse = await getTopPost();

      setPosts(postsResponse.data.results);
      setTopPost(topPostResponse.data.post);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      {/* <HomeHeader>
        <Card
          top={'true'}
          title={topPost.title}
          text={topPost.text}
          banner={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}
        />
      </HomeHeader>
      <HomeBody>
        {posts.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody> */}

      <HomeHeader>
        {isLoading ? (
          <NewsSkeleton />
        ) : (
          <Card
            top={'true'}
            id={topPost.id}
            title={topPost.title}
            text={topPost.text}
            banner={topPost.banner}
            likes={topPost.likes}
            comments={topPost.comments}
          />
        )}
      </HomeHeader>
      <HomeBody>
        {isLoading ? (
          <>
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
          </>
        ) : (
          posts.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          ))
        )}
      </HomeBody>
    </>
  );
}
