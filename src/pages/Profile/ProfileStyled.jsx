import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeader = styled.header`
  width: 90%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  border-radius: 0.3rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  background-color: #fff;
  z-index: 0;
`;

export const ProfileIconEdit = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f17c17;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #e7582f;
  }
`;

export const ProfileBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 50%;
  z-index: -1;
  border-radius: 0.3rem 0.3rem 0 0;
`;

export const ProfileUser = styled.div`
  padding: 2rem;
`;

export const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 13rem;
  border: solid 5px #fff;
  object-fit: cover;
  object-position: center;

  @media (max-width: 900px) {
    width: 5rem;
  }
`;

export const ProfileActions = styled.div`
  padding: 2rem;
`;

export const ProfileIconAdd = styled.i`
  background-color: transparent;
  border-radius: 50%;
  color: #f17c17;
  outline: none;
  border: none;
  cursor: pointer !important;
  font-weight: bold;
  font-size: 1.5rem;

  transition: all 0.3s ease-in-out;

  :hover {
    color: #e7582f;
    font-size: 2.1rem;
  }
`;

export const ProfilePosts = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 1rem auto;
  width: 90%;

  h3 {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #e7582f;
    margin-top: 1rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
