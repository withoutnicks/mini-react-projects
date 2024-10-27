interface Props {
	scroll: number;
}

export const Scroll = ({ scroll }: Props) => {
	return (
		<div className='scroll_bar'>
			<div style={{ width: `${scroll}%` }} className='scroll_indicator'></div>
		</div>
	);
};
