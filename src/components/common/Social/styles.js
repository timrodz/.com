import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  a {
    margin: 0 0.25rem;

    img {
      margin: 0;
    }

    ${'' /* &:first-child,
		&:last-child {
			margin: 0;
		} */}
  }
`;
