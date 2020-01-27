import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.dark};
  background: ${props => props.theme.white};

  &:hover {
    color: ${props => props.theme.darker};
    background: ${props => props.theme.hover};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${props => props.theme.gray};
  }

  ${({secondary}) =>
    secondary &&
    `
    color: #fff;
		background: #0c6561;
    
    &:hover {
      color: #fff;
      background: #064b47;
    }
	`}
`;
