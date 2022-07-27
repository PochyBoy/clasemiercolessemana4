import React, {useState} from 'react'

function CirculoClick(){
    const [actiu,setActiu] = useState(false)

    function clica (){
        setActiu(!actiu)
    }
    let estilos ={
        width: "40px",
        height: "40px",
        backgroundColor: actiu ? "green" : "red",
        display: 'inline-block',
        borderRadius: '50%',
        margin: '15px'
    }
    return (
        <div onClick={clica} style={estilos}></div>
    )
}
export default CirculoClick