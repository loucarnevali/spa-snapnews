import styled from 'styled-components';

export const ButtonSpace = styled.button`
  background-color: #f17c17;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  width: auto;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #e7582f;
  }

  @media (max-width: 800px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`;
