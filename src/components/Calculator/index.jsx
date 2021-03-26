import React from 'react'
import './Calc.css'
export class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: '',
            znakValue: '+',
            num2: '',
            result: 0
        }
    }
    onNum1 = (e) => {
        this.setState(() => ({num1: parseInt(e.target.value)}))
    }
    onNum2 = (e) => {
        this.setState(() => ({num2: parseInt(e.target.value)}))
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
            <input type="text" defaultValue={this.state.num1} onChange={this.onNum1}/>
            <input type="text" className="znak" defaultValue={this.state.znakValue} onChange={this.onZnak}/>
            <input type="text" defaultValue={this.state.num2} onChange={this.onNum2}/>
            <button onClick={this.onSolve}>=</button>
            <span>Result:{this.state.result}</span>
        </div>
    }
}