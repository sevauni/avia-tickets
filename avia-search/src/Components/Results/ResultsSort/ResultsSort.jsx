import React from "react";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Stack,
  Avatar,
  Checkbox,
  FormControl,
  FormLabel,
  Heading


} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { useEffect } from 'react';
import { Switch } from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark
} from '@chakra-ui/react';

import { Divider } from '@chakra-ui/react'
import './ResultsSort.scss';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box
} from '@chakra-ui/react'


const labelStyles = {
  mt: '2',
  ml: '-2.5',
  fontSize: 'sm',
}


const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);



export function ResultsSort({ }) {
  return (
    <div className='results-sort'>

      <MaxFlightDuration />


      <Divider mb={5} />
      <SliderTicketPrice />
      <Divider mb={5} />
      < CheckAirlines />
      <Divider mb={5} />
      <CheckSwitch />
      <CheckSwitch />
      <CheckSwitch />
      <Divider mb={5} />

      <Button colorScheme='teal' size='lg' alignSelf="center">
        Reset filter
      </Button>
    </div>
  );
}




function MaxFlightDuration(props) {
  const [sliderValue, setSliderValue] = React.useState(9)
  const [showTooltip, setShowTooltip] = React.useState(false)

  return (
    <>
      <Heading as='h5' size='sm'>
        Max flight duration
      </Heading>
      <Slider
        h="10"
        id='slider-duration'
        step={1}
        defaultValue={9}
        min={1}
        max={24}

        onChangeEnd={() => setShowTooltip(false)}

        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip
          hasArrow
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </>

  )
}




function CheckAirlines() {
  const [checkedItems, setCheckedItems] = React.useState([true, true])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Airlines
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1} mb={5}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          El Al
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          WizzAir
        </Checkbox>
      </Stack>
    </>
  )
}

function SliderTicketPrice({ }) {
  const [sliderValue, setSliderValue] = React.useState(9)
  const [showTooltip, setShowTooltip] = React.useState(false)

  return (
    <>
      <Heading as='h5' size='sm'>
        Ticket Price
      </Heading>
      <Slider
        h="10"
        id='slider-duration'
        step={1}
        defaultValue={9}
        min={1}
        max={6000}

        onChangeEnd={() => setShowTooltip(false)}

        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip
          hasArrow
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </>

  )
}

function CheckSwitch({ }) {
  return (
  <FormControl display='flex' alignItems='center' mb={5} >
    <FormLabel htmlFor='email-alerts' mb='0'>
      Enable email alerts?
    </FormLabel>
    <Switch size='lg' id='email-alerts' />
  </FormControl>
  );
}
