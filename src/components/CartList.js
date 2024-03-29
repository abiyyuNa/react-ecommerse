import React from 'react';
import CartItem from './CartItem';


export default function CartColumns({value}){
    const {cart} =value;
    return(
        <div>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}/>
            })}
            
        </div>
    );
};       