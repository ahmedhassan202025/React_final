import React,{ Component} from 'react';
import {Media,CardImg,CardImgOverlay,CardTitle,Card, CardText,CardBody} from 'reactstrap';





class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
            SelectedDish:null
        }

    }
    onDishSelect(dish){
        this.setState({SelectedDish:dish});
    }

    renderSelectedDish(dish){
        if(dish!=null){

            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render() {
        const menu=this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading >{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media> */}
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {/* <Media list>
                        {menu}
                    </Media> */}
                     {menu}
                </div>

                <div className="row">
                    <div className="col-12  m-1">
                        {this.renderSelectedDish(this.state.SelectedDish)}
                    </div>
                </div>
            </div>

        );
    }
}
export default Menu;