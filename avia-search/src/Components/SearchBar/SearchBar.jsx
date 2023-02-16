//Libraries
import { Input, Button } from '@chakra-ui/react';
import { Select } from "chakra-react-select";
import { FaExchangeAlt, FaSearch } from "react-icons/fa";

//Components
import { ChooseParams } from './ParamsPortal/ParamsPortal';

//Scss
import './SearchBar.scss';



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




export default function SearchBar({ }) {
  return (
    <div className="search-bar">
      <CityChoose className="search-bar__city-origin" />
      <Button className="search-bar__switch-city" variant='solid'>
        <FaExchangeAlt />
      </Button>
      <CityChoose className="search-bar__city-dest" />
      <DatePicker className="search-bar__date-start" />
      <DatePicker className="search-bar__date-end" />
      <ChooseParams className="search-bar__choose-params" />
      <Button className="search-bar__find-button" colorScheme='teal' variant='solid'>
        <span>Search</span>
        <FaSearch />
      </Button>
    </div>
  );
}


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
