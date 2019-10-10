import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${props => props.theme.white};
  height: 100%;
  
  &:hover h4 {
    color: ${props => props.theme.secondary};
  }
`;