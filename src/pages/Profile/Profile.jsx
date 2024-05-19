import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfilePosts,
  ProfileUser,
} from './ProfileStyled';
import { getAllPostsByUser } from '../../services/postsServices';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  async function findAllPostsByUser() {
    try {
      const response = await getAllPostsByUser();
      const postsData = response.data.postsByUser;

      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  }

  useEffect(() => {
    findAllPostsByUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="fa-regular fa-pen-to-square"></i>
        </ProfileIconEdit>

        <ProfileBackground src={user.background} alt="User Background" />
        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="User Photo" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manage-news/add/news">
            <ProfileIconAdd>
              <i className="fa-solid fa-plus"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>

      <ProfilePosts>
        {posts.length === 0 && <h3> You haven&apos;t created any news yet</h3>}

        {posts.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
              actions={true}
            />
          );
        })}
      </ProfilePosts>
    </ProfileContainer>
  );
}
