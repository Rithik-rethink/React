import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props){
        super(props);
    }

    renderDish(dish) {
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
    renderComment(dish) {
        if(dish == null){
            return(<div></div>);
        }
        const cmnt = dish.map((dishes) =>{
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


    render(){
        const dish = this.props.dish
        if(dish == null){
            return(<div></div>)
        }
        const renderDishh = this.renderDish(dish)
        const renderCommentt = this.renderComment(dish.comments)
        return(
            <div className='row'>
                {renderDishh}
                {renderCommentt}
            </div>
        );
    }
}
export default DishDetail;