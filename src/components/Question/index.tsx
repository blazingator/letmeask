import { ReactNode } from 'react'
import cx from 'classnames'

import { Wrapper, Content, Footer, UserInfo, UserAvatar } from './styles'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children
}: QuestionProps){
  return(
    <Wrapper
      className={cx(
        'question',
        {answered: isAnswered},
        {highlighted: isHighlighted && !isAnswered}
      )}
    >
      <Content>{content}</Content>
      <Footer>
        <UserInfo>
          <UserAvatar src={author.avatar} alt={author.name}/>
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </Footer>
    </Wrapper>
  )
}
