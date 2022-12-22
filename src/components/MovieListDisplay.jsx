import { Flex, IconButton, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { GoHeart } from 'react-icons/go';
import MovieCardInfo from './MovieCardInfo'

const MovieListDisplay = ({ movielist, handleFavorites }) => {

  return (
    <SimpleGrid
      mt={["60px", "100px"]}
      h='100%'
      minHeight='80vh'
      minChildWidth='250px'
      spacing='10px'
      p={2}
      bgGradient="linear(to-b,gray.800,purple.700,gray.800 )"
    >
      {
        movielist.map((movie) => {
          return (
            <Flex
              mt="40px"
              key={movie._id}
              justifySelf='center'
              borderRadius='10px'
              // bgGradient='radial(blue.800, blue.800, blue.600)'
              bgGradient='linear(to-t, blue.700 15%, blue.400 50%, gray.800 60%)'
              w='250px'
              h="300px"
              boxShadow='dark-lg'
            >
              <MovieCardInfo movie={movie} handleFavorites={handleFavorites} />
              <IconButton
                onClick={() => handleFavorites(movie._id)}
                position='absolute'
                mt={1.5}
                ml={210}
                size='sm'
                bgGradient={(movie._fav) ? 'linear(to-b, red.400, pink.800)' : 'linear(to-b,blackAlpha.900,blackAlpha.900)'}
                icon={<GoHeart color='white' />}
                _hover={{
                  bgGradient: (movie._fav) ? '' : 'linear(to-b, red.400, pink.800)',
                }}
              >
                Add to favorites
              </IconButton>
            </Flex>
          );
        })
      }
    </SimpleGrid >

  )
}

export default MovieListDisplay