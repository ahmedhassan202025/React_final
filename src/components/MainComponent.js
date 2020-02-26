import React, { Component } from 'react';
import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import {Switch , Route, Redirect} from "react-router-dom";
import { LEADERS } from './../shared/leaders';
import { PROMOTIONS } from './../shared/promotions';
import { COMMENTS } from './../shared/comments';
import About from "./AboutComponent";

class Main extends Component{

  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS
    //   SelectedDish:null
    };

  }
//   onDishSelect(dishId){
//     this.setState({SelectedDish:dishId});
// }
  render(){

    const HomePage=()=>{
        return(
            <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
        )

    }
    // const DishWithId=(match)=>{
    //     return(
    //     <DishDetail dish={this.state.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10))[0]} 
    //         comment={this.state.comments.filter((dish)=> dish.id=== parseInt(match.params.dishId,10))}
    //     />
    //     );
    // };
    const AboutUs =()=>{
        return(
        <About leaders={this.state.leaders}/>
        )}
    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
  return (
    <div className="App">
      {/* <Header />  
      <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.SelectedDish} />
      < Footer /> */}

      <Header />
        <Switch>
            <Route path="/home" component={HomePage}></Route> 
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}></Menu>}  ></Route>
            <Route path="/menu/:dishId" component={DishWithId} ></Route>
            <Route exact path="/contactus" component={Contact}></Route> 
            <Route exact path="/aboutus" component={AboutUs}></Route>
            <Redirect to="/home"></Redirect>
        </Switch>
      <Footer />

    </div>
  );
  }
}
export default Main;
