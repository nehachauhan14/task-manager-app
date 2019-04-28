import React from 'react';

import classes from './PizzaImage.css';
import pizzaImg from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div
        className={classes.pizzaImg}>
        <img src={pizzaImg} className={classes.pizzaImg}/>
    </div>
)

export default pizzaImage;

