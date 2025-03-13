import { Component } from "react";

export class GroceryList extends Component {
 state = {



 }
onChangeEvent(e) {
    console.log(e.target.value)
}

 render() {
     return (
         <div>
<input placeholder="What do you want to buy?" type="text" onChange={this.onChangeEvent}/>

         </div>
     )
 }
}