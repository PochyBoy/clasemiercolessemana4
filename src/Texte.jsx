import './Texte.css';

function Texte({mida, contingut}){

    const estils = {
        fontSize: mida
    }

    return(
        <>
            <p style={estils} className="texte-vermell">{contingut}</p>
        </>
    )
}

export default Texte;
