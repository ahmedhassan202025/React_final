import React, { Component } from 'react';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";

import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component{

  constructor(props){
    super(props);
    this.props={
    
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
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
        )

    }
    // const DishWithId=(match)=>{
    //     return(
    //     <DishDetail dish={this.props.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10))[0]} 
    //         comment={this.props.comments.filter((dish)=> dish.id=== parseInt(match.params.dishId,10))}
    //     />
    //     );
    // };
    const AboutUs =()=>{
        return(
        <About leaders={this.props.leaders}/>
        )}
    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
  return (
    <div className="App">
      {/* <Header />  
      <Menu dishes={this.props.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.props.SelectedDish} />
      < Footer /> */}

      <Header />
        <Switch>
            <Route path="/home" component={HomePage}></Route> 
            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}></Menu>}  ></Route>
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
export default withRouter(connect(mapStateToProps)(Main));