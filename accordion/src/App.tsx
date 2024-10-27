import { CardAccordion } from './components/CardAccordion';
import { useState } from 'react';
import './App.css';
import { Button, Container, Flex } from '@radix-ui/themes';

function App() {
	const [multiAccordion, setMultiAccordion] = useState(false);

  const handleMultiAccordionToggle = () => {
    setMultiAccordion(!multiAccordion);
  }

	return (
		<Container>
      <Button
        variant="soft"
        color={multiAccordion ? 'crimson' : 'indigo'}
        onClick={handleMultiAccordionToggle}
      >
        {multiAccordion ? 'Disable' : 'Enable'} Multi Accordion
      </Button>
			<Flex direction={'column'} align={'center'} gap={'2'} my={'4'}>
				<CardAccordion
					title='Boostrap'
					content='Lorem ipsum dolor sit amet consectetur, adipiscing elit nibh facilisis.'
					group='library-ui'
          isMultiAccordion={multiAccordion}
				/>
				<CardAccordion
					title='MUI'
					content='Lorem ipsum dolor sit amet consectetur, adipiscing elit cursus hendrerit.'
					group='library-ui'
          isMultiAccordion={multiAccordion}
				/>
				<CardAccordion
					title='Semantic'
					content='Lorem ipsum dolor sit amet consectetur, adipiscing elit magna venenatis.'
					group='library-ui'
          isMultiAccordion={multiAccordion}
				/>
			</Flex>
		</Container>
	);
}

export default App;
