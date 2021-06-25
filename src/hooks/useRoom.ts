import {useState, useEffect} from 'react'

import {database} from '../services/firebase'
import {useAuth} from './useAuth'

type FirebaseQuestions = Record<string, {
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
  likes: Record<string, {
    authorId: string
  }>
}>

type QuestionType = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
  likeCount: number
  likeId: string | undefined
}

export function useRoom(roomId: string){
  const {user} = useAuth()
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<QuestionType[]>([])

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestion: FirebaseQuestions = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestion).map(([k,v]) => {
        return {
          id: k,
          content: v.content,
          author: v.author,
          isHighlighted: v.isHighlighted,
          isAnswered: v.isAnswered,
          likeCount: Object.values(v.likes ?? {}).length,
          likeId: Object.entries(v.likes ?? {}).find(([ke,vl]) => vl.authorId === user?.id)?.[0]
        }
      })

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })

    return () => roomRef.off('value')
  },[roomId, user?.id])

  return {questions, title}
}
