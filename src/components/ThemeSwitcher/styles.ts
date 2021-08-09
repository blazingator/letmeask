import styled from 'styled-components'

const ThemeButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${props => props.theme.bg};
  border: none;
  padding: 5px;
  position: absolute;
  top: 15px;
  right: 10px;
  
  transition: background 0.2s;

  &:hover{
    background: ${props => props.theme.darkerBg};
  }
`

export {ThemeButton}
