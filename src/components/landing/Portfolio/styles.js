import styled from 'styled-components';

export const Card = styled.div`
  padding: 0rem 1rem 1rem 1rem;
  height: 100%;
  
  &:hover h4 {
    color: ${props => props.theme.secondary};
  }
`;

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Content = styled.div`
  h4 {
    margin-top: 1rem;
  }
  p {
    margin-bottom: 0;
  }
`;
