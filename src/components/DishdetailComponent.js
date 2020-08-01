import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';

    
function RenderDish({dish}){
    if (dish != null)
        return(
            <div class='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return(
            <div></div>
        );
}
    
function RenderComment({comments}) {
    if(comments == null){
        return(<div></div>);
    }
    const cmnt = comments.map((dishes) =>{
        return(
            <li key={dishes.id}>
                <p>{dishes.comment}</p>
                <p>-- {dishes.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(dishes.date))}
                </p>
            </li>
        );
    })
    return(
        <div class='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnt}
            </ul>           
        </div>
    );
}


const  DishDetail = (props) => {
    if(props.dish == null){
        return(<div></div>);
    }
    
    return(
        <div className='container'>
            <div className='row'>
                <RenderDish dish = {props.dish}/>
                <RenderComment comments = {props.dish.comments}/>
            </div>
        </div>
    );
}

export default DishDetail;