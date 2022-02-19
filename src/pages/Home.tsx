import { useNavigate } from "react-router-dom";

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'

import '../assets/styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from "../hooks/useAuth";

export function Home(){

    const navigate = useNavigate();

    const {user, signInWithGoogle} = useAuth();

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }

        navigate('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbólica"/>
                <h3>Toda pergunta tem uma resposta.</h3>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Logo Letmeask"/>
                    <button className="create-room" onClick={handleCreateRoom}>
                            <img src={googleImg} alt="Logo Letmeask"/>
                            Crie sua sala com o google
                        </button>

                    <div className="separator">
                        ou entre em uma sala                        
                    </div>

                    <form>
                        <input
                            type="text"
                            placeholder='Digite o código da sala'
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>

                </div>
            </main>
        </div>
    )
}