import { MenuItem } from './menuItem';
import { SectionChild } from '../types';

interface Props {
	list: SectionChild[];
}

export const MenuList = ({ list }: Props) => {
	return (
		<ul className='list-style:none px:20 flex flex:column gap:4 mt:4'>
			{list.map((item) => (
				<MenuItem key={item.label} item={item} />
			))}
		</ul>
	);
};
