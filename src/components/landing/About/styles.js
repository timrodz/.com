import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const AboutWrapper = styled.div`
  padding: 4rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding: 2rem 0;
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  margin-top: 1rem;

  img {
    width: 75%;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  @media (orientation: portrait) {
    img {
      width: 100%;
    }
  }

  @media (orientation: landscape) {
    img {
      transform: translate(15%);
    }
  }
`;
