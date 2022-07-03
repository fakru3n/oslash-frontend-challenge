import React from 'react';
import { useModalStore } from '../../store';

const Poster = (props: any) => {
  const { toggleModal } = useModalStore();
  const movieSelectHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleModal();
  };
  return (
    <>
      <a onClick={movieSelectHandler} className="cursor-pointer hover:shadow-[0_35px_60px_rgba(0,0,0,0.5)]">
        <div
          className={`flex flex-col  gap-2 px-2  ${
            props.isCircle ? 'item-center max-w-max ' : 'items-start'
          } `}
        >
          <div className={`${props.isCircle ? 'h-40' : 'h-80'} `}>
            <img
              key={props.alt}
              src={`http://image.tmdb.org/t/p/original${props.poster_path}`}
              alt={props.original_title}
              className={`${
                props.isCircle
                  ? 'rounded-full h-40 w-40 flex items-center justify-center'
                  : 'w-full h-full rounded-xl'
              } `}
            />
          </div>
          <div
            className={`${
              props.isCircle ? 'flex flex-col items-center ' : ''
            } `}
          >
            <h3
              className={`text-lg font-bold ${
                props.isDark ? 'text-white' : 'text-gray-700'
              }`}
            >
              {props.title}
            </h3>
            <p
              className={`text-sm font-bold ${
                props.isDark ? 'text-white' : 'text-gray-700'
              }`}
            >
              {props.subtitle}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Poster;