import React, {Component} from "react";

export const ComponenteConst = (props) => <h2>{props.msg}</h2>

export function ComponenteFunction(props){
    return <h2>{props.msg}</h2>
}

class Componente extends Component {
    render(){
        return <h2>{this.props.msg}</h2>
    }
}
export default Componente;