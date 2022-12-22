import { Flex, HStack, Icon, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { GoHeart } from 'react-icons/go';
import { getMovies, updateMovie } from '../api/moviesApi';
import ActionsMenu from '../components/ActionsMenu'
import MovieListDisplay from '../components/MovieListDisplay'

const Favorites = ({ movielist, setFavoritesMovieList, handleFavorites }) => {

    return (
        <>
            <ActionsMenu movielist={movielist} setAllMovieList={setFavoritesMovieList} />
            <MovieListDisplay movielist={movielist} handleFavorites={handleFavorites} />
        </>
    )
}

export default Favorites