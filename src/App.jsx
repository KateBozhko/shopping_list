import './App.css';
import image from './first_image.jpg';
import { GroceryList } from './GroceryList';
import imageTwo from './man.jpg'

function App() {
  return (
    <div className='app'>
      
      <img src={image} width="250px" alt="shopping"/>
      <h1>Grocery List</h1>
      <GroceryList/>
      <img src={imageTwo} width="250px" alt="man"/>
  
    </div>
  );
  
}

export default App
