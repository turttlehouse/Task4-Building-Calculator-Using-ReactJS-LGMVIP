import React, { useState } from 'react'
import '../Style/Calculator.css'

const Calculator = () => {

    const [input ,setInput] = useState("")
  
    const getValue = (e)=>{
      setInput(input+e.target.value);  
    }
  
    const Clear = ()=>{
      setInput("");
    }
  
    const Delete =()=>{
      setInput(input.slice(0,-1)); //[1,2,3,4]  Here -1 removes the last index element
    }
  
    const Calculate = ()=>{
      const value = eval(input);
      setInput(value);
    }
  return (
    <div className='calculator-container'>
   
       <input type="text"  id = "input" name = "input" value ={ input } />


      <div className='btn'>
        <input type="button" value="C" className='Clear' onClick={Clear}/>

        <input type="button" value="/" className='operator'onClick={getValue}/>
        <input type="button" value="*" className='operator'onClick={getValue}/>
        <input type="button" value="-" className='operator'onClick={getValue}/>
        <input type="button" value="+" className='operator'onClick={getValue}/>

        <input type="button" value="0" className='number'onClick={getValue}/>
        <input type="button" value="1" className='number'onClick={getValue}/>
        <input type="button" value="2" className='number'onClick={getValue}/>
        <input type="button" value="3" className='number'onClick={getValue}/>
        <input type="button" value="4" className='number'onClick={getValue}/>
        <input type="button" value="5" className='number'onClick={getValue}/>
        <input type="button" value="6" className='number'onClick={getValue}/>
        <input type="button" value="7" className='number'onClick={getValue}/>
        <input type="button" value="8" className='number'onClick={getValue}/>
        <input type="button" value="9" className='number'onClick={getValue}/>
        <input type="button" value="." className='number'onClick={getValue}/>

        <input type="button" value="Del" className='Delete'onClick={Delete}/>

        <input type="button" value="=" className='equal'onClick={Calculate}/>


        
        </div>
    </div>    
  )
}

export default Calculator