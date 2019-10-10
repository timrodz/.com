import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: ${props => props.theme.itemShadow};
  border-radius: 5px;

  h4 {
    color: ${props => props.theme.black};
  }

  p {
    color: ${props => props.theme.gray};
  }
`;