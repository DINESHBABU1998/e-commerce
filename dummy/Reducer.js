import React,{useReducer} from 'react'

const initialstate=0;
    const Reduce=(state,action)=>{
    switch(action){
        case "INC":
            return state+1;
        case "DEC":
            return state-1;
        case "RES":
            return state=0;
        default:
            return 'error';
    }
    }
const Reducer = () => {
    const [state, dispatch] = useReducer(Reduce, initialstate)
  return (
    <>
    <h1>{state}</h1>
    <button className='btn btn-warning' onClick={()=>dispatch("INC")}>INC</button><br/>
    <button className='btn btn-primary' onClick={()=>dispatch("DEC")}>DEC</button><br/>
    <button className='btn btn-danger' onClick={()=>dispatch("RES")}>RES</button>
    </>
  )
};
export default Reducer;
