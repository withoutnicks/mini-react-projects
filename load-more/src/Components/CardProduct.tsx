import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Props {
  title: string,
  price: number,
  image: string[];
}

export const CardProduct = ({title, image, price}: Props) => {
	return (
		<Box maxWidth='240px'>
			<Card size='2'>
				<Inset clip='padding-box' side='top' pb='current'>
          <Slide autoplay={false}>
          {
            image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={title}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 150,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            ))
          }
          </Slide>
				</Inset>
				<Text as='p' size='3'>
					<Strong>{title}</Strong>
          <br />
          S/.{price}
				</Text>
			</Card>
		</Box>
	);
};
