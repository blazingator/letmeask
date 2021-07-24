import { useHistory, useParams } from 'react-router-dom'

import {Button, RoomCode, Question} from '../components'

import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'
import {useTheme} from '../hooks/useTheme'
import {
  RoomPage, HeaderContent, RoomTitle, QuestionList
} from '../styles/room'

// import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'
import {database} from '../services/firebase'

type RoomParams = {
  id: string
}

export function AdminRoom(){
  const {theme} = useTheme()
  // const {user} = useAuth()
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const {questions, title} = useRoom(roomId)

  async function handleEndRoom(){
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string){
    if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({isAnswered: true})
  }

  async function handleHighlightQuestion(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({isHighlighted: true})
  }

  return (
    <RoomPage>
      <header>
        <HeaderContent>
          <img src={theme.logo} alt="Logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
          </div>  
        </HeaderContent>
      </header>

      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        <QuestionList>
          {questions.map((q) => (
            <Question
              key={q.id}
              content={q.content}
              author={q.author}
              isAnswered={q.isAnswered}
              isHighlighted={q.isHighlighted}
            >
              {!q.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(q.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(q.id)}
                  >
                    <img src={answerImg} alt="Dar destaque à pergunta" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(q.id)}
              >
                <img src={deleteImg} alt="Deletar pergunta" />
              </button>
            </Question>
            )
          )}
        </QuestionList>
      </main>
    </RoomPage>
  )
}
