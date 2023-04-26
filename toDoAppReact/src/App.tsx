import './App.css'
import './mystyle.css'
import {useState} from "react";

function App() {

    const [count, setCount] = useState<number | undefined>(0);
    const incrementCount = () => {
        if (count !== undefined) {
            setCount(count + 1);
        }
    };

    const addToDo = () => {
        if (toDo !== "") {
            setToDos([...toDos, toDo]);
            setToDo(""); // Provide an initial value here
        }
    };


    const [toDo, setToDo] = useState("");
    //The solution was to declare the type of useState at initialisation using angle brackets:
    const [toDos, setToDos] = useState<string[]>([]);



  return (
      <div className="my-app">
          <h1>React toDo app</h1>
          <div className="input-wrapper">
              <input className="my-input-field" type="text" name="toDo" placeholder="add new task" onChange={
                  (e) => {
                      setToDo(e.target.value)
                  }
              }/>
              <button className="my-submit-button" type="submit" onClick={addToDo} > add </button>
              <ul className="my-ul-list">
                  {
                      toDos.map((toDo, index) => (
                          <div className="my-toDo-container">
                              <li className="my-list" key={index}>{toDo }</li>
                              <button className = "my-delete-button">Delete</button>
                          </div>
                      ))
                  }
              </ul>
          </div>
      </div>
  )
}

export default App
