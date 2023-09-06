import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	Box,
	Flex,
	useColorMode,
	Stack,
	Button,
	Heading,
	Input,
	Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// --- Container Components ---
const MainContainer = dynamic(() => import('@components/common/Container'));

// --- Form and Validations ---
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Validation Schema and Type ---
const validationSchema = Yup.object().shape({
	keyword: Yup.string().required('Keyword is required!'),
});

type FormType = Yup.InferType<typeof validationSchema>;

interface INavComponent {
	handleSearchAnime: (login?: string) => void;
}

export default function NavComponent({ handleSearchAnime }: INavComponent): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();
	const { handleSubmit, register } = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
	});

	const onSubmit = ({ keyword }: FormType) =>
		new Promise(() => setTimeout(() => handleSearchAnime(keyword), 500));

	return (
		<MainContainer>
			<Box>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box py={4}>
						<Link href="/" _hover={{ textDecoration: 'none' }}>
							<Heading as="h1" fontSize={20}>
								AnimeTV
							</Heading>
						</Link>
					</Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={2}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Input
									{...register('keyword')}
									type="text"
									placeholder="Search anime ..."
									color="whitesmoke"
									bg="gray.600"
									borderColor="gray.600"
									borderRadius="xl"
									w={{ md: 'sm' }}
									focusBorderColor="purple.500"
									_placeholder={{ color: 'gray.400' }}
									_hover={{ borderColor: 'purple.300' }}
								/>
							</form>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</MainContainer>
	);
}
