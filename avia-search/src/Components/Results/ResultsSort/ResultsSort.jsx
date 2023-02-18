//Libraries

import { useState } from "react";
import {
  Tooltip,
  Stack, Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Button,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Divider,
} from '@chakra-ui/react';


//Scss
import './ResultsSort.scss';

//styles for popup Labeles
const labelStyles = {
  mt: '2',
  ml: '-2.5',
  fontSize: 'sm',
}


export function ResultsSort(
  { airlinesList = ["El Al", "WizzAir"],
    filterSwitches = [
      { filterLabel: "Baggage included", filterName: "filter-baggage" },
      { filterLabel: "Overnight Layover", filterName: "filter-overnight-layover" },
      { filterLabel: "Long Layover", filterName: "filter-long-layover" }
    ],
    maxPrice = 5000,
    minPrice = 0,
    maxFlightDuration = 19,
    minFlightDuration = 1,
  }) {

  const filteredButtons = (filterSwitches) => {
    return filterSwitches.map(item => {
      return CheckSwitch(item);
    })
  }



  return (
    <div className='results-sort'>
      <MaxFlightDuration
        minFlightDuration={minFlightDuration}
        maxFlightDuration={maxFlightDuration} />
      <Divider mb={5} />
      <SliderTicketPrice
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <Divider mb={5} />
      <CheckAirlines airlinesList={airlinesList} />
      <Divider mb={5} />
      {filteredButtons(filterSwitches)}
      <Divider mb={5} />
      <Button colorScheme='brand' size='lg' alignSelf="center">
        Reset filter
      </Button>
    </div>
  );
}




function MaxFlightDuration({ maxFlightDuration, minFlightDuration }) {
  //0.7 is almost 2/3 of max price
const twoThirdsOfMax =Math.floor(maxFlightDuration * 0.7);


  const [sliderValue, setSliderValue] = useState(twoThirdsOfMax)
  const [showTooltip, setShowTooltip] = useState(false)


  return (
    <>
      <Heading as='h5' size='sm'>
        Max flight duration
      </Heading>
      <Slider
        h="10"
        id='slider-duration'
        step={1}
        min={minFlightDuration}
        max={maxFlightDuration}
        value={sliderValue}

        onChangeEnd={() => setShowTooltip(false)}

        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
      >
        <SliderTrack bg='blue.200'>
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip
          hasArrow
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb bg='brand.500' />
        </Tooltip>
      </Slider>
    </>

  )
}




function CheckAirlines({ airlinesList }) {
  const [checkedItems, setCheckedItems] = useState(Array(airlinesList.length).fill(true))

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked


  const airlinesChecks = airlinesList.map((name, index, length) => {
    return (
      <Checkbox
        key={`airlines-check-box-${index}`}
        isChecked={checkedItems[index]}
        onChange={e => setCheckedItems(state => {
          state[index] = e.target.checked;
          return [...state]
        })}
      >
        {name}
      </Checkbox>
    )
  });


  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={e => setCheckedItems(item => item.map(item => e.target.checked))}
      >
        Airlines
      </Checkbox>

      <Stack
        pl={6}
        mt={1}
        spacing={1}
        mb={5}>

        {airlinesChecks}
      </Stack>
    </>
  )
}

function SliderTicketPrice({ maxPrice, minPrice }) {
  const [sliderValue, setSliderValue] = useState(maxPrice)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <>
      <Heading as='h5' size='sm'>
        Ticket Price
      </Heading>
      <Slider
        h="10"
        id='slider-duration'
        step={1}
        defaultValue={maxPrice}
        min={minPrice}
        max={maxPrice}

        onChangeEnd={() => setShowTooltip(false)}

        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
      >
        <SliderTrack bg='blue.200'>
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip
          hasArrow
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb bg='brand.500' />
        </Tooltip>
      </Slider>
    </>

  )
}

function CheckSwitch({ filterName, filterLabel }) {
  return (
    <FormControl
      key={`result-switches-${filterName}`}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      mb={5}
    >
      <FormLabel
        htmlFor={filterName}
        mb='0'
      >
        {filterLabel}
      </FormLabel>
      <Switch
        size='lg'
        id={filterName}
      />
    </FormControl>
  );
}
