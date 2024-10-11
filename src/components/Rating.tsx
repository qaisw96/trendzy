import React, { useMemo } from 'react';

interface RatingProps {
  rate: number;
  count: number;
}

const Rating = ({ rate, count }: RatingProps) => {
  const filledStars = Math.round(rate);
  const totalStars = 5;

  const stars = useMemo(() => {
    return '★'.repeat(filledStars) + '☆'.repeat(totalStars - filledStars);
  }, [filledStars]);

  return (
    <div className='flex items-center'>
      <span className='text-gray-600'>{stars}</span>
      <span className='ml-3 text-gray-400'>( {count} customer reviews )</span>
    </div>
  );
};

export default Rating;
