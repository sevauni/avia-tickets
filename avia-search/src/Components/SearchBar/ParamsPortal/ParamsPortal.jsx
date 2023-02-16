
//Libraries
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
  Input,
  ButtonGroup,
  Button,
  HStack,
  useNumberInput
} from '@chakra-ui/react';


//Scss
import './ParamsPortal.scss';


export function ChooseParams(props) {
  return <div className={props.className}>
    <Popover>
      <PopoverTrigger>
        <Button>1 Adult, Econom</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody className="portal-param">
            <div>
              <h6>Adults</h6>
              <span>Over 12 years old</span>
            </div>
            <NumberPassangers />
            <div>
              <h6>Children</h6>
              <span>2-12 years old</span>
            </div>
            <NumberPassangers />            <div>
              <h6>Infants</h6>
              <span>0-2 y.o., on lap</span>
            </div>
            <NumberPassangers />

            <ButtonGroup
              isAttached
              className='portal-param__class-select'
            >
              <Button
                colorScheme='teal'
                variant='solid'
              >Red</Button>
              <Button
                variant='outline'
              >Save</Button>
              <Button
                variant='outline'
              >Save</Button>
            </ButtonGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  </div>;
}

function NumberPassangers() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 7,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW='320px'>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  )
}

