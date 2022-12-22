import React from 'react'
import { GoThreeBars } from "react-icons/go"
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
const UserMenu = () => {
    const navigate = useNavigate()
    return (
        <Menu
        >
            <MenuButton
                display={["flex", "none"]}
                as={IconButton}
                aria-label='Options'
                transition='all 0.2s'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.800' }}
                icon={<GoThreeBars />}
            />
            <MenuList>
                <MenuItem onClick={()=>navigate('/admin')}>Admin</MenuItem>
                <MenuItem onClick={()=>navigate('/')}>Movies</MenuItem>
                <MenuItem onClick={()=>navigate('/favorites')}>Favorites</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserMenu