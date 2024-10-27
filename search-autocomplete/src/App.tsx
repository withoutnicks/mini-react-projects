import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Card, CardBody, Container, Heading, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { Search, User } from '../types.ts';

function App() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchs, setSearchs] = useState<Search | null>();
	const [shouldFetch, setShouldFetch] = useState<boolean>(true)

	const fetchUsers = async () => {
		const response = await fetch(`https://dummyjson.com/users`);
		const data = await response.json();
		setSearchs(data);
	};

	useEffect(() => {
		if (searchTerm.length !== 0 && shouldFetch) {
			fetchUsers()
		} else {
			setShouldFetch(false);
      setSearchs(null);
		}

		setShouldFetch(true);
	}, [searchTerm]);

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		setShouldFetch(true);
	};

	const handleUserClick = (userName: string) => {
		setSearchTerm(userName);
		setShouldFetch(false);
		setSearchs(null);

	};

  const filterUser = searchs?.users.filter(
    (user) => user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  )

	return (
		<Container maxW='md' color='dark'>
			<Heading as='h1' size='lg' my={"4"}>
				Search with Autocomplete
			</Heading>
			<InputGroup>
				<InputLeftAddon>🔍</InputLeftAddon>
				<Input type='text' placeholder='Search users here...' value={searchTerm} onChange={handleSearchChange} />
			</InputGroup>

      <ul>
        {filterUser?.map((user: User) => (
					<Card key={user.id} onClick={() => handleUserClick(user.firstName)} style={{ cursor: 'pointer' }}>
						<CardBody>
							<Text>{user.firstName}</Text>
						</CardBody>
					</Card>
        ))}
      </ul>

			<Box boxSize='sm' my={"6"}>
				<Image src='https://i.pinimg.com/736x/ce/9a/6d/ce9a6d57ac9cc458f3f69f043f3a8e2f.jpg' alt='random picture' />
			</Box>
		</Container>
	);
}

export default App;
