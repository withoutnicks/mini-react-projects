interface Props {
	text: 'x' | 'o';
	updateBoard: (index: number) => void;
	index: number;
}

export const Button = ({ text, updateBoard, index }: Props) => {
  const colorText = text === 'x' ? 'text-fill:red-40' : text === 'o' ? 'text-fill:yellow-68' : '';

	return (
		<button
			className={`py:8px px:12px bg:transparent w:100px h:100px font:36 cursor:pointer ${colorText}`}
			onClick={() => updateBoard(index)}
		>
			{text}
		</button>
	);
};
