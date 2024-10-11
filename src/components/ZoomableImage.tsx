import Image from 'next/image';
import React from 'react';
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from 'react-zoom-pan-pinch';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Controls = () => {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className='absolute top-0 left-0 flex flex-col gap-1 z-20'>
      <button
        onClick={() => zoomOut()}
        className='text-xl py-3 px-5 bg-slate-300'>
        -
      </button>
      <button
        onClick={() => zoomIn()}
        className='text-xl py-3 px-5 bg-slate-300'>
        +
      </button>
    </div>
  );
};

const ZoomableImageV2 = ({ src, alt, width, height }: ZoomableImageProps) => {
  return (
    <div className='relative overflow-hidden'>
      <TransformWrapper initialScale={1}>
        <>
          <Controls />
          <TransformComponent wrapperClass='!w-full'>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              draggable={false}
              className='w-full'
            />
          </TransformComponent>
        </>
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImageV2;
