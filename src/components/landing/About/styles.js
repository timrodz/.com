import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const ImageCenterer = styled.div`
  margin: 0 15%;

  @media (orientation: portrait) and (max-width: 960px) {
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
