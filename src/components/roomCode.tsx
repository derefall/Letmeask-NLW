import copyImg from '../assets/images/copy.svg';
import '../assets/styles/roomCode.scss';

export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copiar código"/>
            </div>
            <span>Sala</span>
        </button>
    )
}