import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummory extends Component {
    componentWillUpdate() {
        console.log("hi");
    }

    render() {
        const ingredientSammary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}} key={igKey}>
                            {igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSammary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>

            </Aux>
        );
    }
};

export default OrderSummory;
