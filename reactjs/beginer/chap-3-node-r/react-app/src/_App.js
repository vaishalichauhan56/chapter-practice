import './App.css';
import {useState, useEffect, useReducer} from 'react';

function App() {
  const [emotions, serEmotions] = useState("Happy");
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  useEffect(() => { console.log(`Yes I am ${emotions}`)},[emotions]);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) =>{
    e.preventDefault();    
    alert(`${title} : ${color}`);
    setTitle("");
    setColor("#FFFfff");
  }
  return (
    <div className="App">
      <h1>React Here {emotions}</h1>
      <button onClick={() => serEmotions("sad")}>sad</button>
      <input type="checkbox" value={checked} onChange={setChecked}/>
      <label>{checked ? "Checked" : "not checked"}</label>

<form onSubmit={submit}>
  <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} width="200px"/>
  <input type="color" value={color} onChange={(event) => setColor(event.target.value)} width="100px"/>
  <input type="submit" name="Submit" width="100px"/>
  
</form>

    </div>
  );
}

export default App;
