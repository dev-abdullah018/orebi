import React from 'react';

const Button = (props) => {
  return (
    <button className={`bg-primary py-4 px-24 font-dm font-bold text-sm text-white capitalize ${props.className}`}>
      {props.title}
    </button>
  );
};

export default Button;
