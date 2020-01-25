import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  height: 100%;
  background-color: ${props => props.theme.white};

  &:hover h4 {
    color: ${props => props.theme.dark};
  }
`;
