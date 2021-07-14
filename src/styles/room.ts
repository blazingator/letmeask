import styled from 'styled-components'

const RoomPage = styled.header`
  header{
    padding: 24px;
    border-bottom: 1px solid ${props => props.theme.white_2};
  }

  main{
    max-width: 800px;
    margin: 0 auto;
  }
`
const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img{
    max-height: 45px;
  }

  > div{
    display: flex;
    gap: 16px;

    button {
      height:  48px;
    }
  }
`

const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1{
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${props => props.theme.darkGrey};
  }

  span{
    margin-left: 16px;
    background: ${props => props.theme.pink};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${props => props.theme.white};
    font-weight: 500;
    font-size: 14px;
  }

`

const QuestionList = styled.div`
  margin-top: 32px;
`

const QuestionField = styled.textarea`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: ${props => props.theme.white_3};
  box-shadow: ${props => props.theme.boxShadow};
  resize: vertical;
  min-height: 130px;
`

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .user-info{
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    > span{
      margin-left: 8px;
      color: ${props => props.theme.darkGrey};
      font-weight: 500;
      font-size: 14px;
    }
  }

  span{
    font-size: 14px;
    color: ${props => props.theme.lightGrey};
    font-weight: 500;

    button{
      background: transparent;
      border: 0;
      text-decoration: underline;
      font-size: 14px;
      cursor: pointer;
      font-weight: 500;
    }
  }
`

export {
  RoomPage, HeaderContent, RoomTitle,
  QuestionList, QuestionField, FormFooter
}
