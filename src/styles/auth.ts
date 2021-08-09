import styled from 'styled-components'

const AuthPage = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  main{
    flex: 8;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Banner = styled.aside`
  flex: 7;
  background: ${props => props.theme.main};
  color: ${props => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img{
    max-width: 320px;
  }

  strong{
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p{
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${props => props.theme.darkWhite};
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-items: center;
  }
  
  h2{
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins',sans-serif;
  }

  a {
    color: ${props => props.theme.pink}
  }
`

const CreateRoomButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2;

  img{
    margin-right: 8px;
  }

  &:hover{
    filter: brightness(0.9);
  }
`

const Form = styled.form`
  input{
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grey};
  }

  button{
    margin-top: 16px;
  }

  button, input{
    width: 100%;
  }
`

const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.grey};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before{
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.grey};
    margin-right: 16px;
  }
  &::after{
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.grey};
    margin-left: 16px;
  }

`

export { 
  AuthPage,
  Banner, MainContent,
  Separator,
  CreateRoomButton, Form
}
