import { Button, Flex, Grid, Heading } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { CardProduct } from './Components/CardProduct';

interface DataProducts {
	id: number;
	title: string;
	price: number;
	images: string[];
}

function App() {
	const [products, setProducts] = useState<DataProducts[]>([]);
	const [limit, setLimit] = useState(12);

	async function getProducts() {
		const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=10&select=title,price,images`);
		const result = await data.json();
		setProducts(result.products);
	}

	useEffect(() => {
		getProducts();
	}, [limit]);

	return (
		<Flex
			align={'center'}
			p={'4'}
			direction={'column'}
			m={'auto'}
		>
			<Heading>Show Products</Heading>
			<br />
			<Grid
				columns={{
					initial: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(4, 1fr)',
				}}
				gap='3'
				width='auto'
			>
				{products.map((product) => (
					<CardProduct
						key={product.id}
						title={product.title}
						price={product.price}
						image={product.images}
					/>
				))}
			</Grid>
			<br />
			<Button color='indigo' variant='soft' onClick={() => setLimit(limit + 12)} style={{ cursor: 'pointer'}}>
				Load more products
			</Button>
		</Flex>
	);
}

export default App;
