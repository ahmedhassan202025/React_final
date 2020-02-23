import React, { Component } from 'react';
import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import DishDetail from "./DishdetailComponent";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";


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
      <HeaderComponent />  
      <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.SelectedDish} />
      < Footer />
    </div>
  );
  }
}
export default Main;
