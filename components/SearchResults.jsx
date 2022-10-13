import React from 'react'

import { Box, Image, Grid, Text, VStack } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

const SearchResults = ({ searchResults }) => {
	return (
		<Grid gridRowGap='1rem'>
			{searchResults.map(({ title, author, image_paths}) => (
				<Box
					key={nanoid()}
					_hover={{
						background: 'teal.500',
						color: 'white',
						cursor: 'pointer',
					}}
					p='.5rem 1rem'
				>
					<Grid
						sx={{
							gridTemplateColumns: '50px 1fr',
							gridColumnGap: '1rem',
							height: '70px',
							overflow: 'hidden',
						}}
					>
                        <Box>
							<Image
								src={`https://s3.eu-north-1.amazonaws.com/docgi.vn/${image_paths}`}
								sx={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>
						</Box>


						<VStack align='start'>
							<Text noOfLines={2}>{title}</Text>
							<Text noOfLines={2}>{author}</Text>
						</VStack>
					</Grid>
				</Box>
			))}
		</Grid>
	)
}

export default SearchResults