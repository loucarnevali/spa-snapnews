import styled from 'styled-components';

export const ContainerResults = styled.section`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
`;

export const SearchPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 1rem auto;
  width: 80%;

  @media (max-width: 800px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

export const TextResults = styled.div`
  padding: 4rem;
  background-color: #fff;
  width: 80%;
  border-radius: 0.3rem;
  box-shadow: rgba(50, 50, 105, 0.15) opx 2px 5 px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  @media (max-width: 800px) {
    width: 60%;
  }

  span {
    font-size: 1rem;
  }
`;
