import React, {useState} from 'react'

function BotonesNumericosLimite() {
    const [actiu,setActiu] = useState(0) 
  //actiu = valor   
    function suma (){
        if (actiu< 10){
            setActiu(actiu +1)
        }
        
    }
    function menos (){
        if(actiu>0){setActiu(actiu -1)}
    }
    
    return(
        <>
        <button type='button' onClick={menos}>-</button>
        <span>{actiu}</span>
        <button type='button' onClick={suma}>+</button>


        </>
    )
}
export default BotonesNumericosLimite