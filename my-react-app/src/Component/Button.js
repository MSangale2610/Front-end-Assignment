import React from 'react';

function Button({ children, variant, className, ...props }) {
  return (
    <button
      className={`py-2 px-4 rounded ${variant === 'big' ? 'text-lg' : 'text-sm'} ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
