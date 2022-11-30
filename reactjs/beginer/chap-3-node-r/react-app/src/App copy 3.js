import './App.css';
import {
  useState,
} from 'react';

function GithubUser({name, location}){
  return(
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
    </div>
  )
}
function App() {
  const [data, setData] = useState(null);
  useState(() => {
    fetch('https://api.github.com/users/vaishalichauhan56').then((response) => response.json()).then(setData);
  });
if(data){
return(
  <GithubUser name={data.name} location={data.location}/>
)
}
  return <h1> Data</h1>;
}

export default App;