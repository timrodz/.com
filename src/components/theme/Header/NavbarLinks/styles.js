import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1rem;
  font-size: 1rem;

  a {
    color: ${props => props.theme.dark};
  }

  a:hover {
    color: ${props => props.theme.black};
  }

  ${({desktop}) =>
    desktop
      ? `
      margin-top: 0;
      @media (max-width: 960px) {
        display: none;
      }

      a {
        margin-right: 1.25rem;
        font-size: 1.25rem;
        &:last-child {
          margin-right: unset;
        }
      }
      `
      : `
      padding: 3rem;
      display: flex;
      flex-direction: column;

      a {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: unset;
        }
      }
    `}
`;
