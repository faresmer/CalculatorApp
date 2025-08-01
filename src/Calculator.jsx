import { useState } from "react";

function Calculator(){
    const [a,setA] = useState(0);
    const [oper,setOper] = useState('');
    const [isEqual,setIsEqual] = useState(false);


    function addNumber(e){
        isEqual?document.getElementsByClassName('result')[0].value='':null;
        const n = e.target.innerText;
        document.getElementsByClassName('result')[0].value+=n;
        setIsEqual(false);

    }

    function clear(){
        document.getElementsByClassName('result')[0].value = '';
        setA(0);
    }

    function operation(e){
        setA(parseFloat(document.getElementsByClassName('result')[0].value));
        setOper(e.target.innerText);
        document.getElementsByClassName('result')[0].value = '';

        


    }

    function percent(){
        const num = parseFloat(document.getElementsByClassName('result')[0].value);
        const result  = num/100;
        document.getElementsByClassName('result')[0].value = result;
        setIsEqual(true);



    }

    //hello in main branch

    function deleteResult(){
        const str = document.getElementsByTagName('input')[0].value
        str!=null?document.getElementsByTagName('input')[0].value = document.getElementsByTagName('input')[0].value.slice(0,-1):null;
        
    }

    function equals(){
        
           const b=parseFloat(document.getElementsByClassName('result')[0].value);
           //the calculations start here:
           switch (oper) {
            case '+':
                document.getElementsByClassName('result')[0].value = a+b;
                
                break;
            case '-':
                document.getElementsByClassName('result')[0].value = a-b;
                
                break;
            case '*':
                document.getElementsByClassName('result')[0].value = a*b;
                
                break;
            case '/':
                document.getElementsByClassName('result')[0].value = a/b;
                
                break;
            default:
                break;
           }
           setIsEqual(true);

    }





    return(<>
        <div className="calculator">
            <input type="text" className="result" readOnly placeholder="00000000"/>
            <div>
                <button className="" onClick={clear}>AC</button>
                <button className="percent" onClick={percent}>%</button>
                <button className="delete" onClick={deleteResult}>DLT</button>
                <button className=""  onClick={operation}>/</button>
            </div>
            <div>
                <button className="number" onClick={addNumber}>7</button>
                <button className="number" onClick={addNumber}>8</button>
                <button className="number" onClick={addNumber}>9</button>
                <button className="" onClick={operation}>*</button>
            </div>
            <div>
                <button className="number" onClick={addNumber}>4</button>
                <button className="number" onClick={addNumber}>5</button>
                <button className="number" onClick={addNumber}>6</button>
                <button className="" onClick={operation}>-</button>
            </div>
            <div>
                <button className="number" onClick={addNumber}>1</button>
                <button className="number" onClick={addNumber}>2</button>
                <button className="number" onClick={addNumber}>3</button>
                <button className="" onClick={operation}>+</button>
            </div>
            <div>
                <button className="number" onClick={addNumber}>00</button>
                <button className="number" onClick={addNumber}>0</button>
                <button className="" onClick={addNumber}>.</button>
                <button className="" onClick={equals}>=</button>
            </div>
            
        </div>
    </>)
}  

export default Calculator;

//bye in other branch

//bye in master branch