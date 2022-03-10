import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'

import '../assets/styles/room.scss'
import { RoomCode } from '../components/roomCode'

export function Room(){
    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Logo Letmeask"/>

                    <div>
                        <RoomCode/>
                    </div>
                </div>
                
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 pergunta</span>
                </div>

                <form>
                    <textarea placeholder="O que você quer perguntar?"/>

                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login</button></span>
                        <Button type="submit">Enviar pergunta</Button>
                    </div>
                </form>
                
            </main>
        </div>
    )
}