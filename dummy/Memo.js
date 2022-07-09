import React,{useState,useMemo} from 'react'

const Memo = () => {
    const [name, setName] = useState('');
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const answer = useMemo(() => {
       return add(val1, val2);
    }, [val1, val2]);
    return (
       <div>
          <input
             placeholder="name"
             value={name}
             onChange={(e) => setName(e.target.value)}
          />
          <input
             placeholder="Value 1"
             value={val1}
             onChange={(e) => setVal1(e.target.value)}
          />
          <input
             placeholder="Value 2"
             value={val2}
             onChange={(e) => setVal2(e.target.value)}
          />
          {answer}
       </div>
    );
 };

 const add = (a1, a2) => {
    console.log('Adding numbers');
    return parseInt(a1) + parseInt(a2);
 };


export default Memo