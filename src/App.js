import logo from './logo.svg';
import './App.scss';
import NameTag from './components/nameTag';
import nameTag from './components/nameTag';
import  input from './components/input';


 const nameTagTitle={
 color:"yellow",
 borderColor: "yellow",
 borderStyle:"dotted"
 }

const makeGreen = BaseComponent => props => {

const addGreen = {
  style: {
    color:"green"
  }
}
const newProps = {
  ... props, ...addGreen
}

return <BaseComponent {...newProps}/>

}

const removeInline = BaseComponent => props =>{
  const newProps = {...props};
  delete newProps.style;
  return <BaseComponent {...newProps}/>
}

const GreenNameTag = makeGreen(nameTag);
const CleanNameTag = removeInline(NameTag); 


const GreenNameTag = makeGreen(NameTag)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="name title">Names List</h1>
        <GreenNameTag firstName= "Tonima" lastName= "Mahbub"></GreenNameTag>
        <NameTag firstName= "Jill" lastName= "Johnson"Jan></NameTag>
        <NameTag firstName= "Jill" lastName= "Johnson"Jan></NameTag>
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
