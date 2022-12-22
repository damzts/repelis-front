import React from 'react'
import { Button, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Select } from '@chakra-ui/react'
import { GoChevronDown, GoChevronUp, GoThreeBars } from "react-icons/go"
import { getMovies } from '../api/moviesApi';

const ActionsMenu = ({ movielist, setAllMovieList }) => {

    const sortMethods = {
        none: { method: (a, b) => null },
        numAscending: { method: (a, b) => a.year - b.year },
        numDescending: { method: (a, b) => b.year - a.year },
        strAscending: { method: (a, b) => a.title > b.title ? 1 : -1 },
        strDescending: { method: (a, b) => a.title > b.title ? -1 : 1 }
    };

    const handleSort = (sortState) => {
        const tempMovieList = Array.from(movielist);
        // console.log(sortState)
        setAllMovieList([...tempMovieList].sort(sortMethods[sortState].method));
    }

    const handleFilter = async (filterState) => {

        let tempMovieList = await getMovies();
        if (filterState !== 'none') {
            tempMovieList = tempMovieList.filter(m => m.genre === filterState);
        }
        setAllMovieList(tempMovieList);
    }

    return (
        <Flex
            w='100%'
            pt={2}
            pl={3}
            pos="fixed"
            zIndex={2}
        >
            <Menu
                closeOnSelect={false}
            >
                <MenuButton as={Button} size="sm" >
                    <Flex>
                        <Icon as={GoThreeBars} />
                    </Flex>
                </MenuButton>
                <MenuList minWidth='150px'>
                    <HStack justifyContent='space-between' alignItems='center' mx={2}>
                        <Heading size='xs'>Sort By:</Heading>
                    </HStack>
                    <MenuOptionGroup title='Title' defaultValue="" type='radio'>
                        <MenuItemOption icon={<GoChevronUp />} value="strAscending" onClick={() => { handleSort("strAscending") }} >Ascending</MenuItemOption>
                        <MenuItemOption icon={<GoChevronDown />} value="strDescending" onClick={() => { handleSort("strDescending") }} >Descending</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup title='Year' defaultValue="" type='radio'>
                        <MenuItemOption icon={<GoChevronUp />} value='numAscending' onClick={() => { handleSort("numAscending") }}>Ascending</MenuItemOption>
                        <MenuItemOption icon={<GoChevronDown />} value='numDescending' onClick={() => { handleSort("numDescending") }}>Descending</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuOptionGroup title='Genre' type='checkbox'>
                        <Select
                            variant='unstyled'
                            textAlign='center'
                            defaultValue="none"
                            // onChange={(e) => console.log(e.target.value)}
                            onChange={(e) => handleFilter(e.target.value)}
                        >
                            <option value='none'>All</option>
                            <option value='action'>Action</option>
                            <option value='comedy'>Comedy</option>
                            <option value='horror'>Horror</option>
                            <option value='scifi'>Sci-Fi</option>
                            <option value='romance'>Romance</option>
                            <option value='fantasy'>Fantasy</option>
                        </Select>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default ActionsMenu