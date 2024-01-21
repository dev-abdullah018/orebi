import React from 'react';
import Breadcrumb from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";
import CartFrom from '../components/layout/CartFrom';

const Cart = () => {
      return ( 
        <div>
            <Container>
                <Breadcrumb title="Cart" />
               <CartFrom/>
            </Container>
        </div>
      );
}

export default Cart
