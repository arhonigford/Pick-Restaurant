import './App.css';
import { useState, useEffect } from 'react';
import {useForm} from "react-hook-form";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [dropdown, setDropdown] = useState(false);
  const {register, handleSubmit }= useForm();
  const [edit, setEdit] = useState("Edit Restaurants");
  let restaurants = [
    "Chipotle",
    "Qdoba",
    "Noodles and Company",
    "Panda Express",
    "Ramen Place",
    "Maru Sushi",
    "PotBellys",
    "Jimmy Johns"
  ];
  
  const [randomRestaurant, setRandomRestaurant] = useState(restaurants[Math.floor(Math.random()*restaurants.length)]);

  const onSubmit = data => {
    console.log(data)
    

  };
  
  const handelInputChange = event => {
    let restaurantsCopy = restaurants;
    const target = event.target;
    const name = target.name;
    var index = restaurantsCopy.indexOf(name);
    if (index == -1) {
      restaurantsCopy[restaurantsCopy.length] = name;
    
    }
    else {
      restaurantsCopy.splice(index, 1);

    }
    restaurants = restaurantsCopy;
    console.log(restaurants)
    setRandomRestaurant(restaurants[Math.floor(Math.random()*restaurants.length)]);
    console.log(randomRestaurant)
  }


  useEffect(() => {
   
  },[]);

  return (
    <div className="App">
      <header className="p">
        <button className="button" onClick={() => {
          if (dropdown) {
            setDropdown(false);
            setEdit("View/Edit Restaurant Options")
          } else {
            setDropdown(true);
            setEdit("Stop Editing")
          }}}>
          {edit}
        </button>
      </header>
      {dropdown &&
      <div>
        <p className="p">Select Restaurants that you do not want to eat at</p>
        <form  className="form" onSubmit={handleSubmit(onSubmit)}>
          <label> <input
            type="checkbox"
            name="Chipotle"
            onChange={handelInputChange}
            />Chipotle</label>
          <p></p>
          <label> <input
            type="checkbox"
            name="Qdoba"
            onChange={handelInputChange}
            />Qdoba</label> 
            <p></p>
          <label> <input
            type="checkbox"
            name="Noodles and Company"
            onChange={handelInputChange}
            />Noodles and Company</label> 
            <p></p>
          <label> <input
            type="checkbox"
            name="Panda Express"
            onChange={handelInputChange}
            />Panda Express</label>
            <p></p>
          <label> <input
            type="checkbox"
            name="Jimmy Johns"
            onChange={handelInputChange}
            />Jimmy Johns</label>
            <p></p>
          <label> <input
            type="checkbox"
            name="PotBellys"
            onChange={handelInputChange}
            />PotBellys</label>
            <p></p>
          <label> <input
            type="checkbox"
            name="Maru Sushi"
            onChange={handelInputChange}
            />Maru Sushi</label>
            <p></p>
          <label> <input
            type="checkbox"
            name="Ramen Place"
            onChange={handelInputChange}
            />Ramen Place</label>
            <p></p>
        
          </form>
        </div>
      }
      <p></p>
      <Popup trigger={<button className="submitButton">Pick Random Restaurant</button>} modal>{randomRestaurant}</Popup>

     
  
    </div>
  );
}

export default App;
