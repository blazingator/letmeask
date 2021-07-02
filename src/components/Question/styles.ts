import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
  padding: 24px;

  & + .question{
    margin-top: 8px;
  }
  
  &.answered{
    background: #dbdcdd;
  }
  
  &.highlighted{
    background: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span{
      color: #29292e;
    }
  }
`

export const Content = styled.p`
  color: #29292e;
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
      color: #737380;
      gap: 8px;

      &.liked{
        color: #835afd;

        svg path{
          stroke: #835afd;
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
    color: #737380;
    font-size: 14px;
  }
`
export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`
