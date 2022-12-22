import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import AdminPanel from './pages/AdminPanel'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route, Routes } from "react-router-dom";
import { getMovies, updateMovie } from './api/moviesApi';
import { HStack, Icon, Text, useToast } from '@chakra-ui/react';
import Footer from './components/Footer';
import { GoHeart } from 'react-icons/go';

function App() {

  const [allMovieList, setAllMovieList] = useState([]);
  const [favoritesMovieList, setFavoritesMovieList] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const movies = await getMovies();
    setAllMovieList(movies);
    setFavoritesMovieList(movies.filter(m => m._fav));
    console.log('i rendered app');
  };

  const toast = useToast();

  const handleFavorites = async (id) => {
    const tempAllMovieList = Array.from(allMovieList);
    let movie = tempAllMovieList.find((p) => p._id === id);
    const movieIndex = tempAllMovieList.findIndex(m => m._id === movie._id);

    const tempMovieListFavorites = Array.from(favoritesMovieList);
    if (movie._fav) {
      movie = {
        ...movie,
        _fav: false,
      };
      setFavoritesMovieList(prev => prev.filter(m => m._id !== id));
    }
    else {
      movie = {
        ...movie,
        _fav: true,
      };

      if (!tempMovieListFavorites.find(m => m._id === id)) {
        tempMovieListFavorites.push(movie)
        setFavoritesMovieList(tempMovieListFavorites);
      }
    }
    const newMovie = await updateMovie(movie);
    tempAllMovieList[movieIndex] = newMovie;
    setAllMovieList(tempAllMovieList);

    toast({
      duration: 2000,
      position: 'top',
      render: () => (
        <HStack
          borderRadius='5px'
          color='white'
          mt='20px'
          p={2}
          bgGradient='linear(to-b, red.300, pink.800)'
          justifyContent='space-evenly'
        >
          <Text
            fontSize='md'
            fontWeight='semibold'
          >
            {
              (movie._fav) ? "Succesfully added to favorites" : "Eliminated from favorites"
            }
          </Text>
          <Icon
            boxSize={6}
            as={GoHeart}
          />
        </HStack>
      ),
    })
  };


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/admin'
          element={<AdminPanel allMovieList={allMovieList} setAllMovieList={setAllMovieList} />}
        />

        <Route
          path='/'
          element={
            <Home
              movielist={allMovieList}
              setAllMovieList={setAllMovieList}
              handleFavorites={handleFavorites}
            />
          }
        />

        <Route
          path='/favorites'
          element={
            <Favorites
              movielist={favoritesMovieList}
              setFavoritesMovieList={setFavoritesMovieList}
              handleFavorites={handleFavorites}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
