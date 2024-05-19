import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchPosts } from '../../services/postsServices';
import Card from '../../components/Card/Card';
import { ContainerResults, SearchPosts, TextResults } from './SearchStyled';

export default function Search() {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  async function search() {
    try {
      const postsApi = await searchPosts(title);
      setPosts(postsApi.data.foundPosts);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {posts.length
            ? `Found ${posts.length} ${
                posts.length > 1 ? 'results' : 'result'
              } for:`
            : 'Not found results for:'}
        </span>
        <h2>{title}</h2>
      </TextResults>

      <SearchPosts>
        {/* Map by card component */}
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
      </SearchPosts>
    </ContainerResults>
  );
}
