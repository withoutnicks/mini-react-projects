import './App.css';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import images from '../src/mock/data.json';
import { useState, useEffect } from 'react';

function App() {
	const [currentImageIndex, setCurrentImageIndex] = useState(() => {
		const savedIndex = localStorage.getItem('currentImageIndex');
		return savedIndex ? +savedIndex : 0;
	});

	useEffect(() => {
		localStorage.setItem('currentImageIndex', currentImageIndex.toString());
	}, [currentImageIndex]);

	const previousImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex > 0 ? currentImageIndex - 1 : images.length - 1
		);
	};

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex < images.length - 1 ? currentImageIndex + 1 : 0
		);
	};

	return (
		<main className='container'>
			<IoIosArrowDropleftCircle
				onClick={previousImage}
				className='arrow arrow-left'
			/>
			{images?.map((image, idx) => (
				<img
					key={idx}
					src={image.imgPath}
					alt={image.label}
					className={
						currentImageIndex === idx
							? 'current-image'
							: 'current-image hide-current-image'
					}
				/>
			))}
			<IoIosArrowDroprightCircle
				onClick={nextImage}
				className='arrow arrow-right'
			/>
			<span className='circle-indicators'>
				{images?.map((_, idx) => (
					<button
						key={idx}
						className={
							currentImageIndex === idx
								? 'current-indicator'
								: 'current-indicator inactive-indicator'
						}
						onClick={() => setCurrentImageIndex(idx)}
					></button>
				))}
			</span>
		</main>
	);
}

export default App;
