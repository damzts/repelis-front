import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ActionsMenu from '../components/ActionsMenu'
import MovieListDisplay from '../components/MovieListDisplay'

const Home = ({ movielist, setAllMovieList, handleFavorites }) => {

  return (
    <>
      <ActionsMenu movielist={movielist} setAllMovieList={setAllMovieList} />
      <MovieListDisplay movielist={movielist} setAllMovieList={setAllMovieList} handleFavorites={handleFavorites} />
    </>
  )
}

export default Home