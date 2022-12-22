import React from 'react'
import { Box, Flex, Image, useDisclosure } from '@chakra-ui/react'
import MovieDetailsModal from '../modal/MovieDetailsModal'

const MovieCardInfo = ({ movie, handleFavorites }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()



  return (
    <>
      <Flex
        flexDir='column'
        alignItems='center'
        w='100%'
      >
        <Flex
          p="1"
          as='button'
          onClick={onOpen}
          w='100%'
        >
          <Image
            loading='eager'
            borderRadius="5px"
            boxSize='250px'
            objectFit='cover'
            src={movie.imageUrl}
          />
        </Flex>
        <Flex
          w='100%'
          flexDir='column'
          alignItems='center'
        >
          <Box
            fontWeight='semibold'
            as='h4'
            color='blackAlpha.900'
            lineHeight='tight'
            noOfLines={1}
          >
            {movie.title}
          </Box>
          <Box
            color='gray.200'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
          >
            {movie.genre} &bull; {movie.year}
          </Box>
        </Flex>
      </Flex>
      <MovieDetailsModal movie={movie} isOpen={isOpen} onClose={onClose} handleFavorites={handleFavorites} />
    </>
  )
}

export default MovieCardInfo