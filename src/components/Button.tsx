// type ButtonProps = {
//     children: string;
// }

import { useState } from "react";

// type Texto = {
//     children: string;
// }

export function Button(){

    // let counter = 0;

    let [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter += 1);
    }

    return(
        <button onClick={increment}>{counter}</button>
        
    )
}