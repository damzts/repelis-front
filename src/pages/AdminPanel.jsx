import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react';
import AdminTableDisplay from '../components/AdminTableDisplay';
import NewEntryDrawer from '../modal/NewEntryDrawer'
import EditEntryDrawer from '../modal/EditEntryDrawer';
import { deleteMovie, saveMovie, updateMovie } from '../api/moviesApi';

const AdminPanel = ({ allMovieList, setAllMovieList }) => {

    const [isEditEntryDrawerVisible, setIsEditEntryDrawerVisible] = useState(false);
    const [editMovie, setEditMovie] = useState();


    const handleOnSubmit = async (movie) => {
        console.log('submitted')
        const tempMovieList = Array.from(allMovieList);
        if (movie._id) {
            const newMovie = await updateMovie(movie);
            const movieIndex = tempMovieList.findIndex(m => m._id === movie._id);
            tempMovieList[movieIndex] = newMovie;
        }
        else {
            const newMovie = await saveMovie(movie);
            if (newMovie) {
                tempMovieList.push(newMovie);
            }
        }
        setAllMovieList(tempMovieList);
    };

    const handleOnEdit = movie => {
        setIsEditEntryDrawerVisible(true)
        setEditMovie(movie)
        console.log(movie)
    }

    const handleOnDelete = async id => {
        console.log(id)
        const response = await deleteMovie(id);
        if (response) {
            setAllMovieList(prev => prev.filter(p => p._id !== id));
        }
    }

    return (
        <>
            <Flex
                flexDir='column'
                bgGradient="linear(to-b,gray.800,purple.700,gray.800 )"
            >
                <Flex
                    w='100%'
                    p={2}
                    mt="100px"

                >
                    <NewEntryDrawer onSubmit={handleOnSubmit} />
                    <EditEntryDrawer onSubmit={handleOnSubmit} movie={editMovie}
                        isOpen={isEditEntryDrawerVisible}
                        onClose={() => setIsEditEntryDrawerVisible(false)}
                    />
                </Flex>
                <AdminTableDisplay movielist={allMovieList} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} />
            </Flex>
        </>
    )
}

export default AdminPanel