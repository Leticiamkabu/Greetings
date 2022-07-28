import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [greetings, setGreetings] = useState(null)

  const handleClick = () => {
    const date = new Date()
    const hour = date.getHours()
    if (hour < 12) {
      setGreetings("Good Morning")
    }
    else if (hour < 16 ) {
      setGreetings("Good Afternoon")
    }
    else {
      setGreetings("Good Evening")
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { greetings || "Should I greet you?" }
        </p>
        <a
          className="App-link"
          onClick = {handleClick}
          href = "#"
        >
          Say Greetings
        </a>
      </header>
    </div>
  );
}

export default App;
