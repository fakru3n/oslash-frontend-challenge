import React from 'react';

export const NextArrow = (props: any) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: 'transparent' }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props: any) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: 'transparent' }}
        onClick={props.onClick}
      />
    </>
  );
};
