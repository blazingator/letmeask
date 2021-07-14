import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${props => props.theme.darkerWhite};
  border-radius: 8px;
  box-shadow: ${props => props.theme.boxShadow};
  padding: 24px;

  & + .question{
    margin-top: 8px;
  }
  
  &.answered{
    background: ${props => props.theme.lighterGrey};
  }
  
  &.highlighted{
    background: ${props => props.theme.lighterWhite};
    border: 1px solid ${props => props.theme.main};

    footer .user-info span{
      color: ${props => props.theme.darkGrey};
    }
  }
`

export const Content = styled.p`
  color: ${props => props.theme.darkGrey};
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  border: 0;
  background: transparent;
  cursors: pointer;
  transition: filter 0.2s;

   button{
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button{
      display: flex;
      align-items: flex-end;
      color: ${props => props.theme.lightGrey};
      gap: 8px;

      &.liked{
        color: ${props => props.theme.main};

        svg path{
          stroke: ${props => props.theme.main};
        }
      }
    }

    &:hover{
      filter: brightness(0.7);
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  > span{
    margin-left: 8px;
    color: ${props => props.theme.lightGrey};
    font-size: 14px;
  }
`
export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`
