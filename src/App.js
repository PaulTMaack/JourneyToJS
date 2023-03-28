import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App({ people }) {
  const [headerColor, setHeaderColor] = useState("#61dafb")

  useEffect(() => {
    console.log("Color is", headerColor)
  }, [headerColor])

  function headerColorButtonHandler() {
    if (headerColor === "#da1111") {
      setHeaderColor("#61dafb");
    }
    else {
      setHeaderColor("#da1111");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1
          style={{ color: headerColor }}
        >
          Hello People!

        </h1>

        <button
          onClick={headerColorButtonHandler}
        >
          Change Color
        </button>

        <ul>
          {
            people && people.map((person) => (
              <GreetingListItem
                name={person.name}
                fruit={person.fruit}
              />
            ))
          }
          {
            people === undefined && ("People is undefined.")
          }
          {
            people === null && ("People is null.")
          }
        </ul>
      </header>
    </div>
  );
}


function GreetingListItem({ name = "Paul", fruit = "Cherry" }) {
  return (
    <li>
      <span className="greeting">Hello</span> {name} <span className="fruit">Favorite fruit: {fruit}</span>
    </li>
  );
}
export default App;
