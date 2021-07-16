import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import {Button} from '../components'

import ilustImg from '../assets/images/illustration.svg'
// import logoImg from '../assets/images/logo.svg'
import {useTheme} from '../hooks/useTheme'
import {
  AuthPage, Banner, MainContent, Form
} from '../styles/auth'

import { database } from '../services/firebase'

export function NewRoom(){
  const {logo} = useTheme()
  const history = useHistory()
  const { user } = useAuth()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(ev: FormEvent){
    ev.preventDefault()

    if(newRoom.trim() === ''){
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
          <img src={logo} alt="Letmeask" />
          <h2>Criar um nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={ev => setNewRoom(ev.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </Form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </MainContent>
      </main>
    </AuthPage>
  )
}
