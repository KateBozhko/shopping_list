import { Component } from "react";

export class GroceryList extends Component {
 state = {
  userInput: "",
  groceryList: []
 }
onChangeEvent(e) {
    this.setState({userInput: e})
}

 render() {
     return (
<div>
<input placeholder="What do you want to buy?"
type="text" 
onChange={(e) => {this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/>
</div>
     )
 }
}