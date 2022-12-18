import React,{Component} from 'react'

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(e){
        this.setState({
            contador: this.state.contador + 1,
        });
        
    }
    restar(e) {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return(
        <div>
            <h2>Eventos en Componentes de Clase ES6</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <p>{this.state.contador}</p>
            
        </div>
        )
        
    }
}

export class EventosES7 extends Component {

    handleClick = (e, mensaje) =>{
        console.log(e.target);
        console.log(mensaje);

    }

    render(){
        return(
            <div>
                <h2>Más sobre Eventos ES7</h2>
                <button onClick={(e) => this.handleClick(e,"parametro")}>Saludar</button>
            </div>
        )
    }
}