import React, {useState} from 'react'

//Функциональный компонент,функция аркылуу жасалган калькулятор
export const Calculator2 = () => {
    const [inputValues, setInputValues] = useState({//hook
        num1: 2,
        num2: 2,
        znak: '+',
        result: 0
    })

    const [result, setResult] = useState(inputValues.result)

    const inputHandler = (e) => {
        setInputValues({...inputValues,[e.target.name]: e.target.value})
    }
    const onSolve = () => {
        switch(inputValues.znak){
            case '+':
                setResult(parseInt(inputValues.num1) + parseInt(inputValues.num2))
                break;
            case '-':
                setResult(parseInt(inputValues.num1) - parseInt(inputValues.num2))
                break;
            case '*':
                setResult(parseInt(inputValues.num1) * parseInt(inputValues.num2))
                break;
            case '/':
                setResult(parseInt(inputValues.num1) / parseInt(inputValues.num2))
                break;
            case '**':
                setResult(parseInt(inputValues.num1) ** parseInt(inputValues.num2))
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <h1>Calculator2</h1>
            <input 
                type="text"
                value={inputValues.num1}
                onChange={inputHandler}
                name="num1"
                />
            <input 
                type="text"
                value={inputValues.znak}
                onChange={inputHandler}
                name="znak" 
                className="znak"/>
            <input 
                type="text"
                value={inputValues.num2}
                onChange={inputHandler}
                name="num2"
                />
            <button onClick={onSolve}>=</button>
            <span value={inputValues.result} onChange={inputHandler}>Result:{result}</span>
        </div>
    )
}