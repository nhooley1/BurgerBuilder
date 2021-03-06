import React from 'react';

import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li>{igKey}: {props.ingredients[igKey]}</li>
    });

    return (
        <Aux>
        <h3> Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
{ingredientSummary}
        </ul>
        <p>Continue to checkout? Y/N</p>
        </Aux>
    )

};

export default orderSummary;