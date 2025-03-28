
import { useState } from "react"
function Autoc(props) {
    const [ival, setIval] = useState('')
    const [fsug,setFsug] = useState([])
    const sug=['']
    const handleC = (e) => {
      const value = e.target.value;
      setIval(value);
  
      const newfsug = sug.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFsug(newfsug);
    };
  
    return (
      <div className="inline-flex">
        
        <input type={"text"} value={ival} onChange={handleC}
          className="border-2 border-slate-300 bg-slate-100 
          rounded-md"
        />
        <ul>
          {fsug.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Autoc