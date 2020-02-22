import React,{ Component} from 'react';
import {Media,CardImg,CardImgOverlay,CardTitle,Card, CardText,CardBody} from 'reactstrap';
import Menu from './MenuComponent';





class Selected_dish extends Component{

    constructor(props){
        super(props);

    }

    render() {
        var myselected=this.props.selected;
        return(
            <div className="container">
        
                <div className="row">
                <div key={myselected.id} className="col-12 col-md-5 pl-1">
                    <Card>
                        <CardImg  top width="100%" src={myselected.image} alt={myselected.name} />
                        <CardBody>
                            <CardTitle>{myselected.name}</CardTitle>
                             <CardText>{myselected.description}</CardText>
                        </CardBody>
                    </Card>

                </div>  
                <div className="col-12 col-md-5">
                    <h1>Comments</h1>
                    <br></br>
                    {myselected.comments[0].comment}
                    <br></br>
                    <div>
                        
                        <p>--{myselected.comments[0].author} , 
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(new Date(Date.parse(myselected.comments[0].date))  
                            )}
                        </p>
                    </div>
                    <br></br>
                    {myselected.comments[1].comment}
                    <br></br>
                    <div>
                        
                        <p>--{myselected.comments[1].author} , 
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(new Date(Date.parse(myselected.comments[1].date))  
                            )} 
                            
                        </p>
                    </div>
                    <br></br>

                    {myselected.comments[2].comment}
                    <br></br>

                    <div>
                        
                        <p>--{myselected.comments[2].author} , 
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(new Date(Date.parse(myselected.comments[2].date))  
                            )} 
                            
                        </p>
                    </div>
                    <br></br>

                    {myselected.comments[3].comment}
                    <br></br>

                    <div>
                        
                        <p>--{myselected.comments[3].author} , 
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(new Date(Date.parse(myselected.comments[3].date))  
                            )} 
                            
                        </p>

                    </div>          
                    <br></br>
                    {myselected.comments[4].comment}
                    <br></br>
                    <div>
                        
                        <p>--{myselected.comments[4].author} , 
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(new Date(Date.parse(myselected.comments[4].date))  
                            )}
                            
                        </p>
                    </div>
                </div>
                </div>

            </div>

        );
    }
}
export default Selected_dish;





