import React from 'react';
import Breadcrumb from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Product 1', price: 20, quantity: 2 },
        { id: 2, name: 'Product 2', price: 30, quantity: 1 },
      ];
    
      const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };
      return ( 
        <div className="my-32">
            <Container>
              <div className="border-b border-[#F0F0F0] pb-16">
                <Breadcrumb title="Cart" />
              </div>
            
            </Container>
        </div>
      );
}

export default Cart
