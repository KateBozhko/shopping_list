import './App.css';
import image from './first_image.jpg';
import imageTwo from './man.jpg'

function App() {
  return (
    <div className='app'>
      <img src={image} width="300px" alt="shopping"/>
      <h1>Grocery List</h1>
      <img src={imageTwo} width="300px" alt="man"/>
    </div>
  );
  
}

export default App
