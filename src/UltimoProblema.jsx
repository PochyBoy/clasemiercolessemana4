import React, {useState} from 'react'

function UltimoProblema() {
    const [actiu,setActiu] = useState(0) 
    
    function suma (){
        setActiu(actiu +1)
    }
    function menos (){setActiu(actiu -1)
        
    }
    
    return(
        <>
        <button type='button' onClick={menos}>-</button>
        <span></span>
        <span></span>
        <span>{actiu}</span>
        <span></span>
        <span></span>
        <button  type='button' onClick={suma}>+</button>
        </>
    )
}
export default UltimoProblema