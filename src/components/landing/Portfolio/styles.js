import styled from 'styled-components';

export const Card = styled.div`
  padding: 0rem 1rem 1rem 1rem;
  height: 100%;
  background-color: ${props => props.theme.white};
  
  &:hover h4 {
    color: ${props => props.theme.dark};
  }
`;

export const Wrapper = styled.div`
  padding: 3rem 0 4rem 0;
`;

export const Content = styled.div`
  h4 {
    margin-top: 1rem;
  }
  p {
    margin-bottom: 0;
  }
`;
