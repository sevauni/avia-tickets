import React from "react";

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
    label: "London",
    value: "2",
  },
];

import {
  Container,
  FormControl,
  FormLabel,
  Code,
  Link,
  FormErrorMessage
} from "@chakra-ui/react";
import { Select, CreatableSelect, AsyncSelect } from "chakra-react-select";




export default function SearchBar({ }) {
  return (
    <div className="search-bar">
      <FormControl >
        <FormLabel>
          From:
        </FormLabel>
        <Select
          size="md"
          variant="outline"
          name="city"
          hideSelectedOptions={true}
          placeholder="Select Airport"
          closeMenuOnSelect
          options={testCity}
        />
      </FormControl>

    </div>
  );
}

