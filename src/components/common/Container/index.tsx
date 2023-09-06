// --- Chakra-UI ---
import { Container, ContainerProps } from '@chakra-ui/react';

export default function ContainerComponent(props: ContainerProps): JSX.Element {
	return (
		<Container maxW={'container.xl'} {...props}>
			{props.children}
		</Container>
	);
}
