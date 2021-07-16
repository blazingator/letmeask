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

  &.outlined{
    background: ${props => props.theme.lighterGrey};
    // TODO melhorar o contraste de cores da borda no tema dark
    border: ${({theme}) => theme.name === 'dark'
      ? 'none'
      : `1px solid ${theme.main}`
    };
    color: ${props => props.theme.main};
  }

  &:not(:disabled):hover{
    filter: brightness(0.9);
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
`
