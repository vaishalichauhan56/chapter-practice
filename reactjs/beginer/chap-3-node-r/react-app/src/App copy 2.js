import './App.css';
import {
  useState,
} from 'react';

function App() {
  const [data, setData] = useState(null);
  useState(() => {
    fetch('https://api.github.com/users/vaishalichauhan56').then((response) => response.json()).then(setData);
  });
if(data){
return(
  <pre>
    <h1>
    {JSON.stringify(data, null)}
    </h1>
  </pre>
)
}
  return <h1> Data</h1>;
}

export default App;