import { Component } from "react";
import imageThree from './bascet.jpg'


export class GroceryList extends Component {
 state = {
  userInput: "",
  groceryList: []
 }
onChangeEvent(e) {
    this.setState({userInput: e})
}
addItem(input) {
    if (input === '') {
        alert("Please, enter an item")
    } else {
  let listArray = this.state.groceryList;
  listArray.push(input);
  this.setState({groceryList: listArray, userInput: ''})
}
}
crossedWord(event) {
const li = event.target;
li.classList.toggle('crossed');
}


render() {
     return (
         <div>
<div>
<input placeholder="What do you want to buy?"
type="text" 
onChange={(e) => {this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/>
</div>
  <div>
      <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
  </div>
  <ul>
      {this.state.groceryList.map((item, index) => (
        <li onClick={this.crossedWord} key={index}>
            <img src={imageThree} width='40px'/>
            {item}</li>  
      ))}
  </ul>
  <div>
    <button onClick={() => this.deleteItem()}>Delete</button>
  </div>
</div>
  
     )
 }
}