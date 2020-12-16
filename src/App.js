import './App.css';
import { useState, useEffect } from 'react';
import {useForm} from "react-hook-form";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [dropdown, setDropdown] = useState(false);
  const {register, handleSubmit }= useForm();
  var restaurants = [
    "Chipotle",
    "Qdoba",
    "Noodles and Company",
    "Ramen",
    "Maru Sushi",
    "Potbelly",
    "Jimmy Johns",
    "Einsteins"
  ];
  
  var randomItem = restaurants[Math.floor(Math.random()*restaurants.length)];

  const onSubmit = data => {
    console.log(data)
    console.log(randomItem)

  };


  useEffect(() => {
   
  },[]);

  return (
    <div className="App">
      <header className="header">
        <button className="button" onClick={() => {
          if (dropdown) {
            setDropdown(false);
          } else {
            setDropdown(true);
          }}}>
          Pick Random
        </button>
      </header>
      <Popup trigger={<button>All Food Options</button>} modal>
        <div>Chipotle</div>
        <div>Qdoba</div>
        <div>Noodles and Company</div>
        <div>Panda Express</div>
        <div>Jimmy Johns</div>
        <div>Potbellys</div>
        <div>Maru Sushi</div>
        <div>Einsteins</div>
        <div>Ramen Place</div>
      </Popup>
      <button className="button" onClick={() => {
          if (dropdown) {
            setDropdown(false);
          } else {
            setDropdown(true);
          }}}>
          Pick Random
        </button>
      {dropdown &&
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">Enter Location: </label>
          <input ref={register} name="location"/>
          <label className="label">Enter Food Type: </label>
          <select name="foodType" ref={register}>
            <option value="fastFood">Fast Food</option>
            <option value="sitDown">Sit Down</option>
            <option value="other">other</option>
          </select>
          <label className="label">Enter Price Range: </label>
          <select name="price" ref={register}>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
          <button className="submitButton">Submit</button>
        </form>


      }
  
    </div>
  );
}

export default App;
