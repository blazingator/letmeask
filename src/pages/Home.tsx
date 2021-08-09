import { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import {Button} from '../components'

// import { auth, firebase } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'

import ilustImg from '../assets/images/illustration.svg'
// import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { useTheme } from '../hooks/useTheme'
import {
  AuthPage, Banner, MainContent,
  Separator, CreateRoomButton, Form
} from '../styles/auth'

import { database } from '../services/firebase'

export function Home(){
  const {theme} = useTheme()
  const { user, signInWithGoogle} = useAuth()
  const history = useHistory()

  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }
    
    history.push('/rooms/new')
  }

  async function handleJoinRoom(ev: FormEvent){
    ev.preventDefault()

    if(roomCode.trim() === '')
      return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if(!roomRef.exists()){
      alert('Room does not exists')
      return
    }

    if(roomRef.val().endedAt){
      alert('Room already closed')
      return
    }

    history.push(`rooms/${roomCode}`)
  }

  return (
    <AuthPage id="page-auth">
      <Banner>
        <img src={ilustImg} alt="Ilustração simbolizando perguntas e repostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </Banner>
      <main>
        <MainContent> 
          <img src={theme.logo} alt="Letmeask" />
          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={e => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </Form>
        </MainContent>
      </main>
    </AuthPage>
  )
}
