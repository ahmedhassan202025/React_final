import React ,{Component} from "react";
import {Modal,ModalHeader,ModalBody,Col,Label, Button,Row} from "reactstrap";
import { Control, LocalForm ,Errors} from 'react-redux-form';



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
        console.log("Current State :" + JSON.stringify(values));
        alert("Current State :" + JSON.stringify(values));
       

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
export default CommentSubmit;