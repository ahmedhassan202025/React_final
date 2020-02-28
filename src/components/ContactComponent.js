import React ,{Component}from 'react';
import {Col,Label, Button,Row} from "reactstrap";
import { Control, LocalForm } from 'react-redux-form';

class Contact extends Component{

    constructor(props){
        super(props);

        

       
        this.handlesubmit=this.handlesubmit.bind(this);
       
    }



    handlesubmit(values){
        console.log("Current State :" + JSON.stringify(values));
        alert("Current State :" + JSON.stringify(values));
       
    }
 
    render(){

        return(
        <div className="container">
            <div className="row row-content">
            <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>   
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h1>Give us four feedback</h1>
                </div>
                <div className="col-12 col-md-9">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group" >
                         <Label htmlFor="firstname" md={2} >First Name</Label>
                         <Col md={10}>
                         <Control.text className="form-control"model=".firstname"  placeholder="First Name"
                                id="firstname" name="firstname"
                                ></Control.text>
                         </Col>
                    </Row >
                    <Row className="form-group" >
                         <Label htmlFor="lastname" md={2} >Last Name</Label>
                         <Col md={10}>
                         <Control.text className="form-control"model=".lastname"  placeholder="Last Name"
                                id="lastname" name="lastname"></Control.text>
                       </Col>
                    </Row >
                    <Row className="form-group">
                         <Label htmlFor="email" md={2} >Email</Label>
                         <Col md={10}>
                         <Control.text className="form-control"model=".email"  placeholder="Email"
                                id="email" name="email"></Control.text>
                         </Col>
                    </Row >
                    <Row className="form-group" >
                         <Label htmlFor="telnum" md={2} >Contact Tel.</Label>
                         <Col md={10}>
                         <Control.text className="form-control"model=".telnum"  placeholder="Tel. Num"
                                id="telnum" name="telnum"></Control.text>
                         </Col>
                    </Row >
                    <Row className="form-group" >
                    <Col md={{size:6 ,offset:2}}>

                        <Row className="form-group">
                            <Label check>    
                                <Control.checkbox className="form-check-input" model=".agree" name="agree"></Control.checkbox>
                                {' '}<strong>May we contact you ?</strong>
                            </Label>
                        </Row >  
                        
                    </Col>
                    <Col md={{size:3,offset:1}}>
                        <Control.select className="form-control" model=".contactType"name="contactType">
                        <option>Tel.</option>
                        <option>Email</option>
                        </Control.select>
                    </Col>
                    </Row>
                    <Row className="form-group" >
                         <Label htmlFor="message" md={2} >Your Feedback</Label>
                         <Col md={10}>
                             <Control.textarea className="form-control" model=".message"  rows="12"
                                id="message" name="message"></Control.textarea>
                         </Col>
                    </Row >
                    <Row className="form-group" >
                        <Col md={{size:10 , offset:2}}>
                            <Button model="submit" color="primary">Send Feedback</Button>
                        </Col>
                    </Row>
                </LocalForm>

                </div>
            </div>
        </div>
    );
    }
}

export default Contact;