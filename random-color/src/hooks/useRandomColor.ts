import { useState } from 'react';

const randomBetween = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

// Función para generar un color RGB aleatorio
const generateRandomRGB = () => {
	const r = randomBetween(0, 255);
	const g = randomBetween(0, 255);
	const b = randomBetween(0, 255);
	return `rgb(${r}, ${g}, ${b})`;
};

// Función para generar un color HEX aleatorio
const generateRandomHex = () => {
	const hex = randomBetween(0, 0xffffff).toString(16).padStart(6, '0');
	return `#${hex.toUpperCase()}`;
};

// Función para generar un color HSL aleatorio
const generateRandomHSL = () => {
	const h = randomBetween(0, 360); // Matiz
	const s = randomBetween(40, 100); // Saturación
	const l = randomBetween(40, 100); // Luminosidad
	return `hsl(${h}, ${s}%, ${l}%)`;
};

// Hook para obtener un color aleatorio basado en un formato
export const useRandomColor = (format: 'rgb' | 'hex' | 'hsl') => {
	const [color, setColor] = useState<string>('');

	const generateColor = () => {
		switch (format) {
			case 'rgb':
				setColor(generateRandomRGB());
				break;
			case 'hex':
				setColor(generateRandomHex());
				break;
			case 'hsl':
				setColor(generateRandomHSL());
				break;
			default:
				setColor('');
				break;
		}
	};

	return { color, generateColor };
};
