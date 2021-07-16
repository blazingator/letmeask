import styled from 'styled-components'

const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${props => props.theme.lighterBg};
  border: 1px solid ${props => props.theme.main};
  cursor: pointer;

  display: flex;
`

const Icon = styled.div`
  background: ${props => props.theme.main};
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Code = styled.span`
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: 240px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.fg}
`

export {Button, Icon, Code}
