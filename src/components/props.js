import React from "react";

export default function Propiedades (props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.candena}</li>
            <li>{props.numero}</li>
            <li>{props.boolean ? "verdadero" : "falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{"Nombre: " + props.objeto.nombre + " Email: " + props.objeto.correo}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul>
        </div>
        
        
    )
}

Propiedades.defaultProps = {
    porDefecto: 'las props',
};