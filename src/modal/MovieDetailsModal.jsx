import React, { useState } from 'react'
import { GoHeart, GoPin, GoPlay } from 'react-icons/go'
import { Box, Button, Heading, HStack, Icon, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react'

const MovieDetailsModal = ({ movie, onClose, isOpen, handleFavorites }) => {

    const [isVideoReproducerVisible, setIsVideoReproducerVisible] = useState(false);

    return (
        <Modal onClose={onClose} size='2xl' isOpen={isOpen}>
            <ModalOverlay
                backdropFilter='auto'
                backdropInvert='10%'
                backdropBlur='5px'
            />
            <ModalContent
                bgGradient="radial(blue.400, blue.600, gray.800)"
                bg
            >
                <ModalHeader>
                    <Heading as='h3' size='lg'>{movie.title} </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack
                        direction='row'
                        spacing='3'
                        justifyContent='space-between'
                    >
                        <Box
                            w={["120px", "300px"]}
                            h={["120px", "360px"]}
                        >
                            <Image
                                borderRadius="5px"
                                boxSize={["230px", "360px"]}
                                objectFit='cover'
                                src={movie.imageUrl}
                            />
                        </Box>
                        <Stack
                            w={["170px", "360px"]}
                            h={["250px", "360px"]}
                        >
                            <Stack
                                alignItems='center'
                            >
                                <Stack spacing={2} direction='row'>
                                    <Tag size={["sm", "md"]} variant='subtle' colorScheme='messenger'>
                                        <TagLeftIcon display={['none', "flex"]} boxSize="12px" as={GoPin} />
                                        <TagLabel>{movie.year}</TagLabel>
                                    </Tag>
                                    <Tag size={["sm", "md"]} variant='subtle' colorScheme='messenger'>
                                        <TagLeftIcon display={['none', "flex"]} boxSize="12px" as={GoPin} />
                                        <TagLabel >{movie.genre}</TagLabel>
                                    </Tag>
                                    <Tag size={["sm", "md"]} variant='subtle' colorScheme='messenger'>
                                        <TagLeftIcon display={['none', "flex"]} boxSize="12px" as={GoPin} />
                                        <TagLabel>{movie.length} mins</TagLabel>
                                    </Tag>
                                </Stack>
                                <Box
                                    borderRadius='10px'
                                    mt="2"
                                    p='2'
                                    bgColor='blackAlpha.300'
                                    w={["200px", "360px"]}
                                    h={["140px", "250px"]}
                                >
                                    <Text noOfLines={8} textAlign="justify" fontSize={["sm", "md"]}>{movie.description}</Text>
                                </Box>
                            </Stack>
                            <HStack
                                spacing='2'
                            >
                                <HStack
                                    p='1'
                                    borderRadius='10px'
                                    bgColor='blackAlpha.800'
                                    as='button'
                                    color='antiquewhite'
                                    _hover={{
                                        bgColor: 'yellow.600',
                                    }}
                                    onClick={() => (isVideoReproducerVisible) ? setIsVideoReproducerVisible(false) : setIsVideoReproducerVisible(true)}
                                >
                                    <Icon
                                        boxSize={8}
                                        as={GoPlay}
                                        color='antiquewhite '
                                    />
                                    <Text
                                        fontSize={["sm", "md"]}
                                        fontWeight='semibold'
                                    >
                                        Watch Now
                                    </Text>
                                </HStack>
                                <IconButton
                                    name='addtofav'
                                    bgGradient={(movie._fav) ? 'linear(to-b, red.400, pink.800)' : 'radial(blackAlpha.700,blackAlpha.900)'}
                                    icon={<GoHeart color='antiquewhite' />}
                                    _hover={{
                                        bgGradient: (movie._fav) ? '' : 'linear(to-b, red.400, pink.800)',
                                    }}
                                    onClick={() => handleFavorites(movie._id)}
                                >
                                    Add to favorites
                                </IconButton>
                            </HStack>
                        </Stack>
                    </Stack>

                    {isVideoReproducerVisible &&
                        <HStack
                            mt="5"
                            justifyContent='center'
                        >
                            <iframe
                                width="560"
                                height="315"
                                src={movie.videoUrl}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </HStack>}
                </ModalBody>

                <ModalFooter>
                    <Button size="sm" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MovieDetailsModal