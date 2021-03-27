import React from 'react'
import './Calc.css'
export class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: '2',
            znakValue: '+',
            num2: '2',
            result: 0
        }
    }
    inputHandler = (e) => {
        this.setState(() => ({[e.target.name]: e.target.value}))//это чтобы каждый раз значение в инпуте обновлялось  
    }
    onZnak= (e) => {
        this.setState(() => ({znakValue: e.target.value}))
    }
    onSolve = () => {
        switch(this.state.znakValue){
            case '+':
                this.setState(()=>({result: parseInt(this.state.num1) + parseInt(this.state.num2)}));
                break;
            case '-':
                this.setState(()=>({result: parseInt(this.state.num1) - parseInt(this.state.num2)}));
                break;
            case '*':
                this.setState(()=>({result: parseInt(this.state.num1) * parseInt(this.state.num2)}));
                break;
            case '/':
                this.setState(()=>({result: parseInt(this.state.num1) / parseInt(this.state.num2)}));
                break;
            case '**':
                this.setState(()=>({result: parseInt(this.state.num1) ** parseInt(this.state.num2)}));
                break;
            default:
                break;
        }
    }
    render() {
        return <div>
            <h1>Calculator</h1>
            <input 
                type="text" 
                value={this.state.num1} 
                onChange={this.inputHandler}
                name="num1"
                />
            <input type="text" className="znak" value={this.state.znakValue} onChange={this.onZnak}/>
            <input 
                type="text" 
                value={this.state.num2} 
                onChange={this.inputHandler}
                name="num2"
                />
            <button onClick={this.onSolve}>=</button>
            <span>Result:{this.state.result}</span>
        </div>
    }
}