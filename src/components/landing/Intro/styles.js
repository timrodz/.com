import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  margin-left: 25%;

  @media (max-width: 960px) {
    width: 100%;
    margin-left: 0%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${props => props.theme.black};

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 28pt;
    font-weight: normal;
    color: ${props => props.theme.gray};

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;
