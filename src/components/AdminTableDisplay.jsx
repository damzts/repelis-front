import { Box, Button, Flex, IconButton, SimpleGrid, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React from 'react'
import { GoArchive, GoGrabber } from 'react-icons/go';

const AdminTableDisplay = ({ movielist, handleOnEdit, handleOnDelete }) => {
    return (
        <TableContainer bgColor='gray.500' borderRadius='10px' m={2} boxShadow="dark-lg" >
            <Table variant='striped' colorScheme='purple' size='sm' whiteSpace='normal'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Year</Th>
                        <Th>Genre</Th>
                        <Th>Length</Th>
                        <Th>imageUrl</Th>
                        <Th>videoUrl</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {movielist.map((movie) => {
                        return (
                            <Tr key={movie._id}>
                                <Td w="120px"><Text>{movie.title}</Text></Td>
                                <Td
                                    w="350px"
                                    h="100px"
                                >
                                    <Text textAlign='justify' noOfLines={['1', '5']}>{movie.description}</Text></Td>
                                <Td w="50px"><Text>{movie.year}</Text></Td>
                                <Td w="50px"><Text>{movie.genre}</Text></Td>
                                <Td w="50px"><Text>{movie.length}</Text></Td>
                                <Td h="100px">
                                    <Box
                                        w="200px"
                                    >
                                        <Text textAlign='justify' noOfLines={['2', '5']}>{movie.imageUrl}</Text>
                                    </Box></Td>
                                <Td
                                    p={0}
                                    h="100px"
                                >
                                    <Box
                                        w="200px"
                                    >
                                        <Text textAlign='justify' noOfLines={['2', '5']}>{movie.videoUrl}</Text>
                                    </Box></Td>
                                <Td>
                                    <VStack>
                                        <IconButton
                                            size='sm'
                                            icon={<GoGrabber />}
                                            colorScheme='yellow'
                                            onClick={() => handleOnEdit(movie)}
                                        />
                                        <IconButton
                                            size='sm'
                                            icon={<GoArchive />}
                                            colorScheme='red'
                                            onClick={() => handleOnDelete(movie._id)}
                                        />
                                    </VStack></Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default AdminTableDisplay