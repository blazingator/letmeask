import styled from 'styled-components'

export const ButtonStyles = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.main};
  color: ${props => props.theme.white};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2;

  img{
    margin-right: 8px;
  }

  &.outlined {
    background: ${({theme}) => theme.lighterBg};
    border: 1px solid ${({theme}) => theme.main};
    color: ${({theme}) => theme.name === 'dark'
      ? theme.fg
      : theme.main};
}

  &:not(:disabled):hover{
    filter: brightness(0.9);
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
`
