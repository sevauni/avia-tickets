import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Divider } from '@chakra-ui/react';
import Logo from '../assets/img/icon.svg';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FaPercentage, FaStar, FaHeadset } from "react-icons/fa";




import './Navigation.scss';

export default function Navigation({ }) {
    return (
        <div className="navigation">
            <a href="./#">
                <img src={Logo} width='60px' alt="description do not forget~!!!!!" />
                <h1>MockTravel</h1>
            </a>

            <div className="navigation__spacer" ></div>
            <ButtonGroup variant='ghost' spacing='2'>
                <Button colorScheme='teal' leftIcon={<FaPercentage />}>
                    Sales
                </Button>
                <Button colorScheme='teal' leftIcon={<FaStar />}>
                    Favorites
                </Button>
                <Button colorScheme='teal' leftIcon={<FaHeadset />} >
                    Support
                </Button>

            </ButtonGroup>
            <Button className="navigation_margins" colorScheme='teal' >
                My Profile
            </Button>
            <div className="navigation__avatar" >
                <Avatar name="Ryan Florence" size='lg' src="https://bit.ly/ryan-florence" />
            </div>
        </div>
    );
}