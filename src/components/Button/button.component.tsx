import React from 'react'

interface ButtonOwnProps {
  label?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonOwnProps>((porps, ref) => {
  return (
    <button ref={ref}>
      A
      {porps.label}
    </button>
  );
});