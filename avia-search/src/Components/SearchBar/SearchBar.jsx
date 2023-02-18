//Libraries
import { useEffect, useState } from "react";
import { Input, Button } from '@chakra-ui/react';
import { Select } from "chakra-react-select";
import { FaExchangeAlt, FaSearch } from "react-icons/fa";

//Components
import { ChooseParams } from './ParamsPortal/ParamsPortal';

//Scss
import './SearchBar.scss';


//cutsom Hook
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};





const testCity = [
  {
    label: "Tel Aviv",
    value: "1",
  },
  {
    label: "London",
    value: "2",
  },
  {
    label: "Moscow",
    value: "3",
  },
];


function DatePicker(props) {
  return (
    <Input
      className={props.className}
      placeholder="Select Date and Time"
      size="md"
      type="date"
      bgColor='white'
    />
  )
}


function CityChoose(props) {
  return (
    <Select
      className={props.className}
      size="md"
      name="city"
      hideSelectedOptions={true}
      placeholder="Select Airport"
      closeMenuOnSelect
      options={testCity}
    />

  )
}

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


const startOpacityTransition = (scrollPosition) => {

  //here(400px) starts css sticky effect navbar
  if (scrollPosition < 350) return 0;
  if (scrollPosition > 450) return 1;
  return scale(scrollPosition, 350, 450, 0, 1);
}


export default function SearchBar({ }) {


  const scrollPosition = useScrollPosition();

  const navBarOpacity = startOpacityTransition(scrollPosition);

  //400 420




  return (
    <div className="search-bar">
      <div
        className="search-bar__scroll-background"
        style={{
          opacity: navBarOpacity
        }}
      ></div>
      <CityChoose className="search-bar__city-origin" />
      <Button className="search-bar__switch-city" variant='solid'>
        <FaExchangeAlt />
      </Button>
      <CityChoose className="search-bar__city-dest" />
      <DatePicker className="search-bar__date-start" />
      <DatePicker className="search-bar__date-end" />
      <ChooseParams className="search-bar__choose-params" />
      <Button className="search-bar__find-button"
        colorScheme='brand'
        variant='solid'
        bg="blue.500"
        isLoading
        loadingText='Searching...'
      >
        <span>Search</span>
        <FaSearch />
      </Button>
    </div>
  );
}