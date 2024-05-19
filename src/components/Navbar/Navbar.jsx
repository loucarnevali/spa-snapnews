import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  ErrorSpan,
  ImageLogo,
  InputSpace,
  Nav,
  UserLoggedSpace,
} from './NavbarStyled';
import logo from '/img/snap-logo.jpeg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../Button/Button';
import { searchSchema } from '../../schemas/searchSchema';
import { userLogged } from '../../services/userServices';
import { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../../Context/UserContext';
import Footer from '../Footer/Footer';

export default function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function signout() {
    Cookies.remove('token');
    setUser(undefined);
    navigate('/');
  }

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      findUserLogged();
    } else {
      setUser(undefined);
    }
  }, []);

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
              {...register('title')}
              type="text"
              placeholder="Search for a title "
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo Snap News" />
        </Link>

        {user ? (
          <UserLoggedSpace>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <h2>{user.name}</h2>
            </Link>
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              onClick={signout}
            ></i>
          </UserLoggedSpace>
        ) : (
          <Link to="/auth">
            <Button type="button" text="Sign In" />
          </Link>
        )}
      </Nav>
      {errors.title && <ErrorSpan> {errors.title.message}</ErrorSpan>}
      <Outlet />
      <Footer />
    </>
  );
}
