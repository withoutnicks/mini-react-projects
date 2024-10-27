import { useState } from 'react';
import { SectionChild } from '../types';
import { FaAngleRight } from 'react-icons/fa';
import { MenuList } from './menuList';

interface Props {
	item: SectionChild;
}

export const MenuItem = ({ item }: Props) => {
	const [isOpen, setisOpen] = useState(false);

	return (
		<li>
			<span className='flex justify-content:space-between py:12 px:12 r:10 text:none text-fill-color:black cursor:pointer'>
				{item.label}
				{item.children && (
					<FaAngleRight color='black' className={`ml-2 cursor-pointer ${isOpen ? 'rotate(90)' : ''}`} onClick={() => setisOpen(!isOpen)} />
				)}
			</span>
			{item.children && isOpen && (<MenuList list={item.children} />)}
		</li>
	);
};
