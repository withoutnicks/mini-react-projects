import { Box, Button, Flex, Heading, Separator } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import { useRandomColor } from './hooks/useRandomColor';
import { CopyIcon } from '@radix-ui/react-icons';
import { Toaster, toast } from 'sonner'

function App() {
	const [typeColor, setTypeColor] = useState<'rgb' | 'hex' | 'hsl'>('hex');
	const { color, generateColor } = useRandomColor(typeColor);

	useEffect(() => {
		generateColor();
	}, [typeColor]);

  const copiedColor = () => {
    navigator.clipboard.writeText(color);
    toast.success('Color copied to clipboard!');
  }

	return (
		<Flex direction={'column'} width={'1000px'} align={'center'} mx={'auto'}>
			<Heading my={'4'}>Generate random color</Heading>
			<Flex gap='3'>
				<Button color='gray' variant='classic' highContrast onClick={() => setTypeColor('hex')}>
					Color HEX
				</Button>
				<Button color='gray' variant='classic' highContrast onClick={() => setTypeColor('rgb')}>
					Color RGB
				</Button>
				<Button color='gray' variant='classic' highContrast onClick={() => setTypeColor('hsl')}>
					Color HSL
				</Button>
			</Flex>
			<Separator my='4' size='4' />
			<Box
				width='320px'
				height='320px'
				style={{ backgroundColor: `${color || '#ffffff'}` }}
			/>
			<br />
			<Box>
				<Button color='gray' variant='outline' size='3' onClick={copiedColor}>
					{color === '' ? 'Select Color' : color}{' '}
					<CopyIcon width='18' height='18' cursor={'pointer'} />
				</Button>
			</Box>

      <Toaster position="bottom-center" />
		</Flex>
	);
}

export default App;
