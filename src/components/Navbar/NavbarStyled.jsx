import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  /* position: fixed;
  top: 0; */
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;

export const ImageLogo = styled.img`
  width: 5rem;
  height: 3.5;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 4rem;
  }
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 130px;
  }

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

    @media (max-width: 800px) {
      padding: 0rem;
    }
  }

  button:hover {
    background-color: #757575;
    color: #f5f5f5;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    @media (max-width: 800px) {
      font-size: 0.8rem;
    }

    &:focus {
      border: 1px solid #e7582f;
    }
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: #9e0000;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  border-radius: 7px;
`;

export const UserLoggedSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  gap: 1rem;

  @media (max-width: 650px) {
    gap: 0.5rem;
  }

  h2 {
    font-size: 1.1rem;
    color: #f17c17;
    transition: all 0.3s;
    cursor: pointer;

    @media (max-width: 650px) {
      font-size: 0.8rem;
    }
  }

  h2:hover {
    color: #e7582f;
  }

  i {
    font-size: 1.5rem;
    color: #f17c17;
    cursor: pointer;

    @media (max-width: 800px) {
      font-size: 0.8rem;
    }
  }

  i:hover {
    color: #e7582f;
  }
`;
