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
        <span>{actiu-2}</span>
        <span>{actiu-1}</span>
        <span>{actiu}</span>
        <span>{actiu+1}</span>
        <span>{actiu+2}</span>
        <button  type='button' onClick={suma}>+</button>
        </>
    )
}
export default UltimoProblema