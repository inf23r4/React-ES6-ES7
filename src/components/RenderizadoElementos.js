import React, { Component } from "react";

export default class ReanderizadoElementos extends Component {
    constructor(props){
            super(props);
            this.state = {
                seasons:["primavera", "verano", "otoño", "invierno"],
            };
    }
    render(){
        return(
            <div>
                <h2>Renderizado de elementos</h2>

                <ol>
                {this.state.seasons.map((el, index) => 
                    <li key= {index} >{el}</li>
                )}
            </ol>
            </div>
            
        )
    }
}