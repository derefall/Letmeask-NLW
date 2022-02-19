import {ButtonHTMLAttributes} from 'react'
import '../assets/styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props:ButtonProps){

    // let counter = 0;

    // let [counter, setCounter] = useState(0)

    // function increment(){
    //     setCounter(counter += 1);
    // }

    return(
        //Esse ...props vai pegar todas as propriedades que for recebido ao chamar o componente e vai passar para esse botão aqui
        <button className="button" {...props}/>
        
    )
}