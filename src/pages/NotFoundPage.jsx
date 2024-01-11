import React from 'react';
import dribbble from "../assets/dribbble1.gif"
import Image from '../components/layout/Image';
import Container from '../components/layout/Container';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Container>
          <div className="w-full text-center font-dm">
            <div className="bg-cover">
              <h1 className="text-6xl sm:text-9px md:text-[200px] text-black absolute top-20 sm:top-[100px] left-1/2 -translate-x-1/2 ">404</h1>
              <Image src={dribbble} className="m-auto"/>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl">Look like you're lost</h3>
              <p className="mt-5 md:mt-0 text-lg">The page you are looking for is not available!</p>
              <Link href="/" className="bg-black text-white py-4 px-6 inline-block mt-4 font-normal text-xl">Go to Home</Link>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default NotFoundPage;
