interface Props {
	titleTab: string;
	isSelected: boolean;
  changeTab: () => void;
}

export const TabComponent = ({ titleTab, isSelected, changeTab }: Props) => {

	return (
		<li className='me-2'>
			<button
				className={`inline-block p-4 bg-zinc-100 rounded-t-lg active dark:bg-zinc-800 ${
					isSelected ? 'text-lime-500 font-bold' : ''
				}
        
      `}
      aria-selected={isSelected}
      onClick={changeTab}
			>
				{titleTab.toUpperCase()}
			</button>
		</li>
	);
};
