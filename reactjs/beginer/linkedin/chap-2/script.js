let cow = "🤖";
let cowBoy = "🤠";
let smile = "🌝";
function Header(props) {
  return (
    <div>
      <h1>Hello React{props.val} js </h1>     
    </div>
  );
}
function Main(props){
  return(
    <ul>
      {props.dishes.map((dish) => (
      <li key={dish.id}>
        {dish.title}
      </li>
    ))}
  </ul>
  )
}
function Footer(props) {
  return (
    <div>
      <h2>&copy; Copyright {props.year} </h2>
    </div>
  );
}

const dishes = [
  "Macroni",
  "Pasta",
  "sandwich",
];
const dishObject = dishes.map(
  (dish, i) => ({
  id : i,
  title : dish
})
);
ReactDOM.render(
  <React.Fragment>
    <Header val="Vaishali Chauhan" />
    <Main adjective="amazing" dishes={dishObject}/>
    <ul>
      <li>{cow}</li>
      <li>{cowBoy}</li>
      <li>{smile}</li>
    </ul>
    <Footer year={new Date().getFullYear()} />
  </React.Fragment>,
  document.getElementById("root")
);
