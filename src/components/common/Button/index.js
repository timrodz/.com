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
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.white};
  background: ${props => props.theme.primary};
  
  &:hover {
    background: ${props => props.theme.ctaHover};
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
		background: #fff;
	`}
`;
