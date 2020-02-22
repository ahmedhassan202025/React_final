import React, { Component } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap'; 
import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import DishDetail from "./DishdetailComponent";



class Main extends Component{

  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      SelectedDish:null
    };

  }
  onDishSelect(dishId){
    this.setState({SelectedDish:dishId});
}
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.SelectedDish} />
    </div>
  );
  }
}
export default Main;
