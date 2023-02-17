import React from "react";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Stack,
  Avatar,
  Checkbox,
  FormControl,
  FormLabel


} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

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
} from '@chakra-ui/react'


const labelStyles = {
  mt: '2',
  ml: '-2.5',
  fontSize: 'sm',
}



export function ResultsSort({ }) {
  return (
    <div className='results-sort'>
      <Slider aria-label='slider-ex-1' defaultValue={30}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Divider />
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme='pink'
        defaultValue={[10, 30]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Divider />
      {IndeterminateExample()}
      <Divider />
      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='email-alerts' mb='0'>
          Enable email alerts?
        </FormLabel>
        <Switch size='lg' id='email-alerts' />
      </FormControl>
      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='email-alerts' mb='0'>
          Enable email alerts?
        </FormLabel>
        <Switch size='lg' id='email-alerts' />
      </FormControl>
      <Divider />
      <Button colorScheme='teal' size='md'>
        Button
      </Button>
    </div>
  );
}



function IndeterminateExample() {
  const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  )
}
