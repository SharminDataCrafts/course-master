import React from 'react';

const Cart = (props) => {
    const course = props.count;
    const total = course.reduce((total,course)=>
        total+course.price,0)
    return (
        <div>
            <h2>Your Account</h2>
            <hr />
            <p>Total Course Purchased: {course.length}</p>
            <p>Price: {total}</p>
        </div>
    );
};

export default Cart;