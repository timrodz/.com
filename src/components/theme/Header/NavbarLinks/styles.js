import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: ${props => props.theme.gray};
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.secondary};
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

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
