import styled from 'styled-components';

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 1rem auto;
  width: 90%;

  @media (max-width: 800px) {
    width: 98%;
    grid-template-columns: 1fr;
  }
`;

export const HomeHeader = styled.section`
  width: 90%;
  display: flex;
  margin: 1rem auto;

  @media (max-width: 800px) {
    width: 98%;
    flex-direction: column;
    align-items: center;
  }
`;
