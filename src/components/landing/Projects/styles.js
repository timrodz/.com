import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  height: 100%;
  background-color: ${props => props.theme.white};
  
  &:hover h4 {
    color: ${props => props.theme.medium};
  }
`;

export const Wrapper = styled.div`
  padding: 4rem 0;
`;

export const Content = styled.div`
  padding: 1rem 0;
  height: 8rem;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }
    
    p {
      margin: 0 0 0 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: ${props => props.theme.black};
      margin-left: 0.5rem;
    }
  }
`;
