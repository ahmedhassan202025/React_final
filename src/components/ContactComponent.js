import React ,{Component}from 'react';
import {Form,FormGroup,Col,Label,Input, Button} from "reactstrap";
class Contact extends Component{

    constructor(props){
        super(props);

        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''

        }
        this.handlesubmit=this.handlesubmit.bind(this);
        this.handleInput=this.handleInput.bind(this);
        

    }

    handlesubmit(event){
        console.log("Current State :" + JSON.stringify(this.state));
        alert("Current State :" + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleInput(event){
     const target=event.target;
     const value=target.type ==="checkbox" ? target.checked : target.value;
     const name=target.name;

        this.setState({
            [name]:value
        });
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
                <Form onSubmit={this.handlesubmit}>
                    <FormGroup row>
                         <Label htmlFor="firstname" md={2} >First Name</Label>
                         <Col md={10}>
                         <Input type="text" value={this.state.firstname} placeholder="First Name"
                                id="firstname" name="firstname" onChange={this.handleInput}></Input>
                         </Col>
                    </FormGroup>
                    <FormGroup row>
                         <Label htmlFor="lastname" md={2} >Last Name</Label>
                         <Col md={10}>
                         <Input type="text" value={this.state.lastname} placeholder="Last Name"
                                id="lastname" name="lastname" onChange={this.handleInput}></Input>
                         </Col>
                    </FormGroup>
                    <FormGroup row>
                         <Label htmlFor="email" md={2} >Email</Label>
                         <Col md={10}>
                         <Input type="email" value={this.state.email} placeholder="Email"
                                id="email" name="email"onChange={this.handleInput}></Input>
                         </Col>
                    </FormGroup>
                    <FormGroup row>
                         <Label htmlFor="telnum" md={2} >Contact Tel.</Label>
                         <Col md={10}>
                         <Input type="tel" value={this.state.telnum} placeholder="Tel. Num"
                                id="telnum" name="telnum"onChange={this.handleInput}></Input>
                         </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md={{size:6 ,offset:2}}>

                        <FormGroup check>
                            <Label check>    
                                <Input type="checkbox" name="agree"onChange={this.handleInput}></Input>
                                <strong>May we contact you ?</strong>
                            </Label>
                        </FormGroup>  
                        
                    </Col>
                    <Col md={{size:3,offset:1}}>
                        <Input onChange={this.handleInput} type="select" value={this.state.contactType}>
                        <option>Tel.</option>
                        <option>Email</option>
                        </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                         <Label htmlFor="message" md={2} >Your Feedback</Label>
                         <Col md={10}>
                             <Input onChange={this.handleInput} type="textarea" value={this.state.message} rows="12"
                                id="message" name="message"></Input>
                         </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size:10 , offset:2}}>
                            <Button type="submit" color="primary">Send Feedback</Button>
                        </Col>
                    </FormGroup>
                </Form>

                </div>
            </div>
        </div>
    );
    }
}

export default Contact;