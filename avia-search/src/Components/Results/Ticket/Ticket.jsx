import {
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
  Stack,
  Avatar
} from '@chakra-ui/react'

import {
  FaShareSquare,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaClock,
  FaSuitcaseRolling,
  FaMoon,
} from "react-icons/fa";

import './Ticket.scss';

export function Ticket({ }) {
  return <div className="ticket">
    <div className='ticket__tear-marks-line' ></div>
    <div className="ticket__price">
      <h2>₪1,536</h2>
    </div>
    <Button size='lg' className="ticket__button-buy" colorScheme='blue'>
      Buy Ticket
    </Button>
    <div className="ticket__airlines-name">
      <FlyCompanies />
    </div>
    <div className="ticket__time-departure">
      <h3>22:30</h3>
      <span>Tel Aviv Yafo</span>
      <span>Thu 22 Feb</span>
    </div>
    <div className="ticket__time-arrival">
      <h3>22:30</h3>
      <span>Tel Aviv Yafo</span>
      <span>Thu 22 Feb</span>
    </div>
    <div className="ticket__flight-duration">
      <FaPlaneDeparture className="ticket__icon" />
      <div>
        <span>Flight duration: 9h 35min</span>
        <div></div>

      </div>
      <FaPlaneArrival className="ticket__icon" />
    </div>
    <div className="ticket__airports-names">
      <Tooltip
        hasArrow
        placement='bottom'
        closeDelay="300ms"
        label="Flight departs from «Ben Gurion International Airport» (Tel Aviv-Yafo) at 22:30 (local time)"
        aria-label='A tooltip'
        w="10rem"
      >
        <span>TLV</span>
      </Tooltip>

      <Tooltip
        hasArrow
        placement='bottom'
        closeDelay="300ms"
        label="Flight departs from «Ben Gurion International Airport» (Tel Aviv-Yafo) at 22:30 (local time)"
        aria-label='A tooltip'
        w="10rem"
      >
        <span>TLV</span>
      </Tooltip>
    </div>
    <div className="ticket__about-ticket">
      <FlightPropsIcons />
    </div>
    <IconButton className="ticket__button-share"
      variant='outline'
      aria-label='Share Ticket'
      icon={<FaShareSquare />}
    />
    <div className="ticket__ticket-footer"></div>
  </div>;
}

function FlyCompanies() {
  return (
    <>
      <Stack direction='row'>
        <Tooltip
          hasArrow
          placement='bottom'
          closeDelay="300ms"
          label="Flight departs from «Ben Gurion International Airport» (Tel Aviv-Yafo) at 22:30 (local time)"
          aria-label='A tooltip'
          w="10rem"
        >
          <Avatar bg='teal.500' name='Wizz' src='https://airhex.com/images/airline-logos/tail/el-al.png' />
        </Tooltip>
      </Stack>
      <Stack direction='row'>
        <Tooltip
          hasArrow
          placement='bottom'
          closeDelay="300ms"
          label="Flight departs from «Ben Gurion International Airport» (Tel Aviv-Yafo) at 22:30 (local time)"
          aria-label='A tooltip'
          w="10rem"
        >
          <Avatar bg='teal.500' name='El Al' src='https://bit.ly/broken-link' />
        </Tooltip>
      </Stack>
      <Stack direction='row'>
        <Tooltip
          hasArrow
          placement='bottom'
          closeDelay="300ms"
          label="Flight departs from «Ben Gurion International Airport» (Tel Aviv-Yafo) at 22:30 (local time)"
          aria-label='A tooltip'
          w="10rem"
        >
          <Avatar bg='teal.500' name='El Al' src='https://bit.ly/broken-link' />
        </Tooltip>
      </Stack>
    </>
  )
}

function FlightPropsIcons({ }) {
  return (
    <>
      <Tooltip hasArrow label='Long Layover' bg='gray.300' color='black'>
        <IconButton className="ticket__button-share" colorScheme='red' variant='outline' aria-label='Long Layover' icon={<FaClock />} />
      </Tooltip>
      <Tooltip hasArrow label='Baggage not included' bg='gray.300' color='black'>
        <IconButton className="ticket__button-share" colorScheme='red' variant='outline' aria-label='Baggage not included' icon={<FaSuitcaseRolling />} />
      </Tooltip>
      <Tooltip hasArrow label='Overnight Layover' bg='gray.300' color='black'>
        <IconButton className="ticket__button-share" colorScheme='red' variant='outline' aria-label='Overnight Layover' icon={<FaMoon />} />
      </Tooltip>
    </>



  );
}
