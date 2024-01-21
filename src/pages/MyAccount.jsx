import React from 'react';
import Breadcrumb from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";

const MyAccount = () => {
    return ( 
            <Container>
                <Breadcrumb title="My Account" />
                <div className='font-dm font-bold text-base text-[#767676] grid grid-flow-row w-full sm:w-1/3'>
                    <div className='border-b border-solid border-[#f0f0f0f] pb-5 mb-5 hover:text-primary'>
                        <h3>Dashboard</h3>
                    </div>
                    <div className='border-b border-solid border-[#f0f0f0f] pb-5 mb-5 hover:text-primary'>
                        <h3>Others</h3>
                    </div>
                    <div className='border-b border-solid border-[#f0f0f0f] pb-5 mb-5 hover:text-primary'>
                        <h3>Donwloads</h3>
                    </div>
                    <div className='border-b border-solid border-[#f0f0f0f] pb-5 mb-5 hover:text-primary'>
                        <h3>Addresses</h3>
                    </div>
                    <div className='border-b border-solid border-[#f0f0f0f] pb-5 mb-5 hover:text-primary'>
                        <h3>Account details</h3>
                    </div>
                    <div className='border-b border-solid border-[#f0f0f0f] pb-5 hover:text-primary'>
                        <button>Logout</button>
                    </div>
                </div>
            </Container>
      );
}

export default MyAccount
