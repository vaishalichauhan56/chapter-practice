import './App.css';
import {useState, useEffect, useReducer, useRef} from 'react';

function App() {
  const [emotions, serEmotions] = useState("Happy");
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  useEffect(() => { console.log(`Yes I am ${emotions}`)},[emotions]);
  const txtTitle = useRef();
  const txtColor = useRef();
  const submit = (e) =>{
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = txtColor.current.value;
    alert(`${title} : ${color}`);
    txtTitle.current.value = "";
    txtColor.current.value = "";
  }
  return (
    <div className="App">
      <h1>React Here {emotions}</h1>
      <button onClick={() => serEmotions("sad")}>sad</button>
      <input type="checkbox" value={checked} onChange={setChecked}/>
      <label>{checked ? "Checked" : "not checked"}</label>

<form onSubmit={submit}>
  <input type="text" ref={txtTitle} width="200px"/>
  <input type="color" ref={txtColor} width="100px"/>
  <input type="submit" name="Submit" width="100px"/>
  
</form>

    </div>
  );
}

export default App;
