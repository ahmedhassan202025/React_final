import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <CardImg width="100%" src={baseUrl+ dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle><Link to={`/menu/${dish.id}`}>{dish.name}</Link></CardTitle>
                </CardImgOverlay>
            </Card>
        );


    }

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                            <div className= "col-12">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                    <BreadcrumbItem active >Menu</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;  
// import React,{ Component} from 'react';
// import {Media,CardImg,CardImgOverlay,CardTitle,Card, CardText,CardBody} from 'reactstrap';





// class Menu extends Component{


//     render() {
        
//         const menu=this.props.dishes.map((dish) => {
//             return(
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     {/* <Media tag="li">
//                         <Media left middle>
//                             <Media object src={dish.image} alt={dish.name}/>
//                         </Media>
//                         <Media body className="ml-5">
//                             <Media heading >{dish.name}</Media>
//                             <p>{dish.description}</p>
//                         </Media>
//                     </Media> */}
//                     <Card key={dish.id} onClick={() => this.props.onClick(dish)} >
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardImgOverlay>
//                         <CardTitle>{dish.name}</CardTitle>
//                     </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });
           
//         return(
//             <div className="container">
//                 <div className="row">
//                     {/* <Media list>
//                         {menu}
//                     </Media> */}
//                      {menu}
//                 </div> 
//             </div>

//         );
//     }
// }
// export default Menu;