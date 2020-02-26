import React,{ Component} from 'react';
import {Media,CardImg,CardImgOverlay,CardTitle,Card, CardText,CardBody} from 'reactstrap';
import Menu from './MenuComponent';
import {Breadcrumb,BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';


const RenderComments = ({commentsArray}) => {

            return(
                <div text-center>
                    <h1>Comments</h1>
            <div>{commentsArray[0].comment}<br></br><br></br>{commentsArray[0].author},
                 {new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                                }).format(new Date(Date.parse(commentsArray[0].date))  
                                )}
                <br></br><br></br>
            </div>
            <div>{commentsArray[1].comment}<br></br><br></br>{commentsArray[1].author},
            {new Intl.DateTimeFormat("en-GB", {
                           year: "numeric",
                           month: "long",
                           day: "2-digit"
                           }).format(new Date(Date.parse(commentsArray[1].date))  
                           )}
           <br></br><br></br>
       </div>
        <div>{commentsArray[2].comment}<br></br><br></br>{commentsArray[2].author},
        {new Intl.DateTimeFormat("en-GB", {
                       year: "numeric",
                       month: "long",
                       day: "2-digit"
                       }).format(new Date(Date.parse(commentsArray[2].date))  
                       )}
       <br></br><br></br>
   </div>
   <div>{commentsArray[3].comment}<br></br><br></br>{commentsArray[3].author},
                 {new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                                }).format(new Date(Date.parse(commentsArray[3].date))  
                                )}
                <br></br><br></br>
            </div>
            <div>{commentsArray[4].comment}<br></br><br></br>{commentsArray[4].author},
            {new Intl.DateTimeFormat("en-GB", {
                           year: "numeric",
                           month: "long",
                           day: "2-digit"
                           }).format(new Date(Date.parse(commentsArray[4].date))  
                           )}
           <br></br><br></br>
       </div>
       </div>
            );
  
   
}


class DishDetail extends Component{

    constructor(props){
        super(props);

    }

    

    render() {
        // if(this.props.dish != null)
        // {
            var myselected=this.props.dish;
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{myselected.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
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
                    <div className="col-12 col-md-5 pl-1">
                        <RenderComments commentsArray={this.props.comments} dishCommented={myselected}/>
                    </div>
                </div>
                
                </div>
            );
    }
            
    
}
export default DishDetail;





