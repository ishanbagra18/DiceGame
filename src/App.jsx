import Firstgame from "./components/Firstgame";
import { useState } from "react";
import Playgame from "./components/Playgame";
import './App.css';

function App() {
  const [isGamestarted, setisGamestarted] = useState(false);

  const togglefunction = () => {
    setisGamestarted((prev) => !prev);
  };

  return (
    <>
      {isGamestarted ? (
        <Playgame />
      ) : (
        <Firstgame toggle={togglefunction} />
      )}

      
    </>
  );
}

export default App;
