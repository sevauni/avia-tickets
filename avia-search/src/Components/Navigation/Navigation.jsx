
//Libraries
import { Avatar, Button, ButtonGroup } from '@chakra-ui/react';
import { FaPercentage, FaStar, FaHeadset } from "react-icons/fa";

//Scss
import './Navigation.scss';


//Assets
import Logo from '../../assets/img/icon.svg';


export default function Navigation({ }) {
    return (
        <nav className="navigation">
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
        </nav>
    );
}