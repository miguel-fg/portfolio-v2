import IconChevronBack from './icons/IconChevronBack';
import IconChevronForward from './icons/IconChevronForward';

import { useState, useEffect } from 'react';

const ImageGallery = (props) => {
  const { imagePaths, orientation } = props;
  const [imgIndex, setImgIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(imagePaths[0]);
  const lastIndex = imagePaths.length - 1;
  const maxWidth = orientation === 'mobile' ? 'max-w-56 md:max-w-80' : 'w-10/12 min-w-64 md:min-w-96';

  const nextImg = () => {
    imgIndex === lastIndex ? setImgIndex(0) : setImgIndex(imgIndex + 1);
  };
  const prevImg = () => {
    imgIndex === 0 ? setImgIndex(lastIndex) : setImgIndex(imgIndex - 1);
  };

  useEffect(() => {
    setSelectedImg(imagePaths[imgIndex]);
  }, [imgIndex]);

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex flex-row items-center'>
        <div
          className='rounded-md hover:bg-black hover:bg-opacity-5 hover:cursor-pointer active:bg-sea-green-light'
          onClick={prevImg}
        >
          <IconChevronBack />
        </div>
        <img src={selectedImg} alt='' className={`rounded-xl drop-shadow-md ${maxWidth}`} />
        <div
          className='rounded-md hover:bg-black hover:bg-opacity-5 hover:cursor-pointer active:bg-sea-green-light'
          onClick={nextImg}
        >
          <IconChevronForward />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
