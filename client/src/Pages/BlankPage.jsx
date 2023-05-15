import React from 'react';
import { Carousel } from 'flowbite-react';

const BlankPage = () => {
  return (
    <div className='bg-[red] w-full h-[500px]'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={true}>
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            />
        </Carousel>
        </div>
    </div>
  )
}

export default BlankPage