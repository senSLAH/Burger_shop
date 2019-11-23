import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummory = (props) => {
    const ingredientSammary = Object.keys(props.ingredients)
        .map(igKey => {
            return  <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}} key={igKey}>
                        {igKey}</span>: {props.ingredients[igKey]}
                    </li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSammary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummory;
