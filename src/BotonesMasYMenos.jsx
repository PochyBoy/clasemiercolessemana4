import React, {useState} from 'react'

function BotonesMasYMenos() {
    const [actiu,setActiu] = useState(0) 
    
    function suma (){
        setActiu(actiu +1)
    }
    function menos (){setActiu(actiu -1)
        
    }
    
    return(
        <>
        <button type='button' onClick={menos}>-</button>
        <span>{actiu}</span>
        <button  type='button' onClick={suma}>+</button>
        </>
    )
}
export default BotonesMasYMenos