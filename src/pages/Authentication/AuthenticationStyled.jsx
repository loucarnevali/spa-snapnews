import styled from 'styled-components';

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 550px) {
    /* background-color: red; */
    flex-direction: column;
    margin: 10px auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 400px;
  padding: 2rem;
  gap: 1rem;
  background-color: ${(props) =>
    props.type === 'signin' ? '#e7582f' : 'white'};
  color: ${(props) => (props.type === 'signup' ? '#e7582f' : 'white')};

  @media (max-width: 550px) {
    padding: 1rem;
    height: ${(props) => (props.type === 'signin' ? '200px' : '300px')};
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;

    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
  }
`;
