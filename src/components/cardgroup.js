import React,{ Component} from 'react';
import {CardGroup,Card,Media,CardBody,CardImg,CardTitle,CardText} from "reactstrap";

class CardClass extends Component{


    constructor(props){
        super(props);
    }

    render(){
        const card=this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-3 mt-5">
                    <Card>
                        <CardImg variant="top" src={dish.image}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
  
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <CardGroup>
                        {card}
                    </CardGroup>
                </div>
            </div>

        );
    }
}

export default CardClass;


