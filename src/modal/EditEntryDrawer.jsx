import React from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { GoPlus } from 'react-icons/go';
import MovieForm from '../form/MovieForm';

const EditEntryDrawer = ({ onSubmit, onClose, isOpen, movie }) => {

    // const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                size='lg'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Upload a New Movie
                    </DrawerHeader>
                    <DrawerBody>

                        <MovieForm onSubmit={onSubmit} defaultEditValues={movie} />

                    </DrawerBody>
                    <DrawerFooter borderTopWidth='1px'>
                        <Button
                            size="sm"
                            colorScheme='purple'
                            mr={3}
                            form='product-form'
                            type='submit'
                            onClick={onClose}
                            children='Update'
                        />

                        <Button
                            size="sm"
                            colorScheme='red'
                            children='Cancel'
                            onClick={onClose}
                        />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default EditEntryDrawer