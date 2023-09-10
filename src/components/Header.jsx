import React from 'react';

export const Header = ({ title, children}) => {

  console.log('Section', title);
  const a =    1;

  return (
    <div>
      <h1>{title}</h1>
      <div className='content'>
        {children}
      </div>
    </div>
  );
}