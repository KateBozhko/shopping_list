import './App.css';
import image from './first_image.jpg';
import { GroceryList } from './GroceryList';
import imageTwo from './man.jpg'


function App() {
  return (
    <div className='app'>
<div className='container'>
      <img src={image} width="250px" alt="shopping"/>
 </div>
      <h1>Grocery List</h1>
      <GroceryList/>
  <div className='container'>
      <img src={imageTwo} width="250px" alt="man"/>
  </div>
    </div>
  );
  
}

export default App
