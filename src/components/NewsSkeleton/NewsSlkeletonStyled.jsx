import styled, { keyframes } from 'styled-components';

export const SkeletonAnimation = keyframes`
    from {
        opacity: 0.6;
    }
    to {
        opacity: 1;
    }
`;

export const SkeletonCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  animation: ${SkeletonAnimation} 1s infinite alternate;

  & .thumbnail {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    background-color: #ddd;
  }

  & .details {
    flex: 1;
    margin-left: 20px;

    & .title {
      width: 100%;
      height: 20px;
      background-color: #ccc;
      margin-bottom: 10px;
    }

    & .description {
      width: 100%;
      height: 80px;
      background-color: #ccc;
    }
  }
`;
