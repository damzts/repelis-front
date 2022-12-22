import React from 'react'
import { HStack, Flex } from '@chakra-ui/react'
import { Heading, Button, Image } from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";


import UserMenu from './UserMenu';
import agumon from '../assets/agu.png'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <Flex
            position="fixed"
            top={0}
            zIndex={2}
            border="2px"
            w="100%"
            h={["60px", "100px"]}
            p="1"
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            // backgroundColor="blue.700"
            backgroundImage="url('http://www.lightspeedmagazine.com/wp-content/files_mf/1667339946_magicfields_issuemasthead_1_1.jpg')"
            backgroundPosition="left top"
        >
            <HStack spacing="20px">
                <HStack spacing='0px'>
                    <Link
                        to="/"
                    // onClick={}
                    >
                        <Image
                            borderRadius="30px"
                            padding='5px'
                            w={[50, 120]}
                            h={[50, 120]}
                            src={agumon}
                            _hover={{
                                padding: '0px',
                            }}
                        />
                    </Link>
                    <Heading
                        display={["flex", "flex", "flex", "none"]}
                        fontSize={["3xl", "6xl"]}
                        bgGradient="linear(to-b,red.600,orange.400,yellow.400)"
                        bgClip='text'
                        fontFamily="sans-serif"
                        fontWeight='extrabold'
                        textShadow='dark-lg'
                    >
                        LIGHTSPEED
                    </Heading>
                </HStack>
                <HStack spacing="20px" display={["none", "flex"]} >

                    <Button
                        colorScheme='yellow'
                        variant='solid'
                        size="sm"
                        onClick={() => navigate('/admin')}
                    >
                        Admin
                    </Button>
                    <Button
                        colorScheme='yellow'
                        variant='solid'
                        size="sm"
                        onClick={() => navigate('/')}
                    >
                        Movies
                    </Button>
                    <Button
                        colorScheme='yellow'
                        variant='solid'
                        size="sm"
                        onClick={() => navigate('/favorites')}
                    >
                        Favorites
                    </Button>
                </HStack>
            </HStack>
            <UserMenu />
        </Flex>
    )
}

export default Navbar