import React,{ Component} from 'react';
import {CardImg,CardTitle,Card, CardText,CardBody, Button} from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';
import {Modal,ModalHeader,ModalBody,Label,Row} from "reactstrap";
import { Control, LocalForm ,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentSubmit extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

    }
    
    render(){
        return(
            <div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="container">
                <ModalHeader toggle={this.toggleModal} closeButton>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="container">
                    <Row className="form-group" >
                         <Label htmlFor="rating" >Rating</Label>
                         <Control.select className="form-control " model=".selectRate"name="selectRate">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </Row>
                    <Row className="form-group" >
                        <Label  htmlFor="yourName" className="" >Your Name</Label>
                         <Control.text className="form-control"model=".author"  placeholder="Your Name"
                                id="author" name="author"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                ></Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />     
                    </Row> 
                    <Row className="form-group" >
                         <Label htmlFor="comment"  >Your Feedback</Label>
                             <Control.textarea className="form-control" model=".comment"  rows="12"
                                id="comment" name="comment"></Control.textarea>
                    </Row >
                    <Row className="form-group" >
                            <Button model="submit" color="primary">Submit</Button>
                    </Row>
                </LocalForm>
                </ModalBody>
            </Modal>

                    <Button outline variant="light" onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
            </div>

        )
    
  
  
    }
}   
const RenderComments = ({commentsArray, postComment, dishId}) => {
        return(
            <div text-center>
               <h1>Comments</h1>
               <div>
               {commentsArray.map((value, index) =>
               <Stagger in> 
                    <Fade in>
                        <div key={index}>{commentsArray[index].comment}<br></br><br></br>{commentsArray[index].author},
                        {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                    }).format(new Date(Date.parse(commentsArray[index].date))  
                                    )}
                    <br></br><br></br>
                        </div>
                    </Fade>
                </Stagger>   
            )}
            </div>
                <CommentSubmit dishId={dishId} postComment={postComment}/>
            </div>
               )
        
}
class DishDetail extends Component{


    render() {
        // if(this.props.dish != null)
        // {
                if (this.props.isLoading) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <Loading />
                            </div>
                        </div>
                    );
                }
                else if (this.props.errMess) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <h4>{this.props.errMess}</h4>
                            </div>
                        </div>
                    );
                }
                else 
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
                        <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.5) translateY(-50%)'
                                }}>
                            <Card>
                                <CardImg  top width="100%" src={baseUrl + this.props.dish.image} alt={myselected.name} />
                                <CardBody>
                                    <CardTitle>{myselected.name}</CardTitle>
                                    <CardText>{myselected.description}</CardText>
                                </CardBody>
                            </Card>
                         </FadeTransform>       
                        </div> 
                        <div className="col-12 col-md-5 pl-1">
                            <RenderComments commentsArray={this.props.comments} dishCommented={myselected}
                            postComment={this.props.postComment}
                            dishId={this.props.dish.id}/>
                        </div>
                    </div>
                
                </div>
            );
    }
            
    
}
export default DishDetail;





