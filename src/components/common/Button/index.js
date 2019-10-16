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
  background: ${props => props.theme.light};
  
  &:hover {
    color: ${props => props.theme.light};
    background: ${props => props.theme.dark};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${props => props.theme.gray};
  }

  ${({ secondary }) =>
    secondary &&
    `
    color: #0c6561;
		background: #d4f8f3;
    
    &:hover {
    color: #d4f8f3;
    background: #0c6561;
  }
	`}
`;