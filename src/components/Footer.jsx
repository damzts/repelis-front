import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Flex
            border="2px"
            w="100%"
            h='100%'
            flexDir="row"
            backgroundImage="url('http://www.lightspeedmagazine.com/wp-content/files_mf/1667339946_magicfields_issuemasthead_1_1.jpg')"
            backgroundPosition="center left"
            justifyContent='center'
        >
            <Text
                border='1px'
                fontFamily="sans-serif"
                fontWeight='normal'
                color='green.600'
            >
                Simple MERN project
            </Text>

        </Flex>
    )
}

export default Footer