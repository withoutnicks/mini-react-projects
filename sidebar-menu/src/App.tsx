import el from '@master/styled.react';
import menu from './mock/data.json';
import { MenuList } from './components/menuList';

function App() {
	/* COmponents CSS */
	const Subtitle = el.h2`font:20 font:heavy m:25 text:center`;

	return (
		<section className='h:auto flex'>
			<article className='hidden@xs block@md w:25vw@md min-h:100vh h:auto bg:rgb(165,195,221)'>
				<Subtitle>Explore Sections</Subtitle>
				<div className='h:0.5 bg:black mx:20' />
				<nav>
					<MenuList list={menu} />
				</nav>
			</article>
			<article className='w:full w:75vw@md h:auto'>
				<Subtitle>Home page</Subtitle>
			</article>
		</section>
	);
}

export default App;
