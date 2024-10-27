import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa6';

interface Props {
	numStars: number;
}

export const StarComponent = ({ numStars }: Props) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	useEffect(() => {
		const savedRating = localStorage.getItem('rating');
		if (savedRating) {
			setRating(parseInt(savedRating));
		}
	}, []);

	const handleClick = (currentIdx: number) => {
		setRating(currentIdx);
		localStorage.setItem('rating', currentIdx.toString());
	};
	const handleMouseEnter = (currentIdx: number) => {
		setHover(currentIdx);
	};
	const handleMouseLeave = () => {
		setHover(rating);
	};

	return (
		<section className='stars'>
			{[...Array(numStars)].map((_, idx) => {
				idx += 1;

				return (
					<FaStar
						key={idx}
						className={idx <= (hover || rating) ? 'on' : 'off'}
						onClick={() => handleClick(idx)}
						onMouseEnter={() => handleMouseEnter(idx)}
						onMouseLeave={() => handleMouseLeave()}
						size={40}
					/>
				);
			})}
		</section>
	);
};
