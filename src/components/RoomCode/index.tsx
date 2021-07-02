import copyImg from '../../assets/images/copy.svg'

import { Button, Icon, Code } from './styles'   

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps){
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Button onClick={copyRoomCodeToClipboard}>
      <Icon>
        <img src={copyImg} alt="Copiar código da sala" />
      </Icon>
      <Code>Sala {props.code}</Code>
    </Button>
  )
}
