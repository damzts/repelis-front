import React from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { GoPlus } from 'react-icons/go';
import MovieForm from '../form/MovieForm';

const NewEntryDrawer = ({ onSubmit }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    return (
        <>
            <Button
                justifySelf='flex-end'
                leftIcon={<GoPlus />}
                colorScheme='green'
                onClick={onOpen}
            >
                New Entry
            </Button>
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

                        <MovieForm onSubmit={onSubmit} />

                    </DrawerBody>
                    <DrawerFooter borderTopWidth='1px'>
                        <Button
                            size="sm"
                            colorScheme='blue'
                            mr={3}
                            form='product-form'
                            type='submit'
                            onClick={onClose}
                            children='Add Movie'
                        />

                        <Button
                            size="sm"
                            colorScheme='purple'
                            form='product-form'
                            type="reset"
                            children='Reset'
                        />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    )
}

export default NewEntryDrawer