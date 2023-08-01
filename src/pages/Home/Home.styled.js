import { styled } from 'styled-components';

export const HomePageWrapper = styled.div`
  width: 100vw;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
  background-size: cover;
  -webkit-animation: slidein 100s;
  animation: slidein 100s;

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  @-webkit-keyframes slidein {
    from {
      background-position: top;
      background-size: 3000px;
    }
    to {
      background-position: -100px 0px;
      background-size: 2750px;
    }
  }

  @keyframes slidein {
    from {
      background-position: top;
      background-size: 3000px;
    }
    to {
      background-position: -100px 0px;
      background-size: 2750px;
    }
  }
`;
