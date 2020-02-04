import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;

  a {
    color: ${props => props.theme.dark};
  }

  a:hover {
    color: ${props => props.theme.black};
  }
`;
