import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchPosts } from '../../services/postsServices';
import Card from '../../components/Card/Card';
import { ContainerResults, SearchPosts, TextResults } from './SearchStyled';

export default function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchPosts(title);
      setNews(newsApi.data.results);
      // console.log(newsApi.data.results);
    } catch (error) {
      console.log(error);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {news.length
            ? `Found ${news.length} ${
                news.length > 1 ? 'results' : 'result'
              } for:`
            : 'Not found results for:'}
        </span>
        <h2>{title}</h2>
      </TextResults>

      <SearchPosts>
        {/* Map by card component */}
        {news.map((newsItem) => (
          <Card
            key={newsItem.id}
            title={newsItem.title}
            text={newsItem.text}
            banner={newsItem.banner}
            likes={newsItem.likes}
            comments={newsItem.comments}
          />
        ))}
      </SearchPosts>
    </ContainerResults>
  );
}
