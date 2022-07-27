import React, {useState} from 'react'


    
function CirculoInput(){

    const [actiu,setActiu] = useState(false)

    function clica1 (){
    setActiu(false)}
    function clica2 (){
    setActiu(true)}

    let estilos ={
        width: "40px",
        height: "40px",
        backgroundColor: actiu ? "green" : "red",
        display: 'inline-block',
        borderRadius: '50%',
        margin: '15px'
    }
    return(
        <>
        <div>
            <div style={estilos}></div>
            <div style={estilos}></div>
            <div style={estilos}></div>
            <div style={estilos}></div>
        </div>
        <div>
            <button type='button' onClick={clica1}>rojo</button>
            <button type='button' onClick={clica2}>verde</button>
        </div>
        </>
        
    )}

    export default CirculoInput