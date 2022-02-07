import React, { FC } from 'react';

interface Props{
  title:string
}

const UnderConstruction:FC<Props> = ({title}) => {
  return <div className="flex flex-wrap pt-20 justify-center items-center h-screen">
      {title} <br />
      Coming Soon
  </div>;
};

export default UnderConstruction;
