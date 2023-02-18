//Components
import {
  Button, IconButton,
  Tooltip,
  Stack,
  Avatar,
  Skeleton,
  SkeletonCircle, SkeletonText
} from '@chakra-ui/react';

//Icons
import {
  FaShareSquare,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaClock,
  FaSuitcaseRolling,
  FaMoon
} from "react-icons/fa";

//Scss
import './Ticket.scss';


export function Ticket({ isLoaded,
  ticketPrice = "-",
  ticketPriceCurrency = "$",
  airlinesName = "No Info",
  airlinesLink = "https://airhex.com/images/airline-logos/tail/el-al.png",
  timeDeparture = "22:30",
  cityDeparture = "Tel Aviv",
  dateDeparture = "Thu 22 Feb",
  airportDeparture = "TLV",
  timeArrival = "01:30",
  cityArrival = "London",
  dateArrival = "Thu 23 Feb",
  airportArrival = "HTR",
  flightDuration = "9h 35min",
  shareLink = "https://github.com",
  buyLink = "https://github.com",
  longLayover = true,
  overnightLayover = true,
  noBaggage = true,
}) {




  return (
    <div className="ticket">
      <div className='ticket__tear-marks-line' ></div>
      <div className="ticket__price">
        {
          isLoaded
            ? <h2>{ticketPriceCurrency}{ticketPrice}</h2>
            : <SkeletonText noOfLines={1} skeletonHeight='10' w="50%" isLoaded />
        }
      </div>

      <Button
        className="ticket__button-buy"
        isLoading={!isLoaded}
        size='lg'
        colorScheme='brand'>
        <span>Buy Ticket</span>
      </Button>


      <div className="ticket__airlines-name">
        <FlyCompanies
          isLoaded={isLoaded}
          airlinesLink={airlinesLink}
          airlinesName={airlinesName} />
      </div>

      <SkeletonText
        className="ticket__time-departure"
        isLoaded={isLoaded}
      >
        <div className="ticket__time-departure">
          <h3>{timeDeparture}</h3>
          <span>{cityDeparture}</span>
          <span>{dateDeparture}</span>
        </div>
      </SkeletonText>

      <SkeletonText
        className="ticket__time-arrival"
        isLoaded={isLoaded}
      >
        <div className="ticket__time-arrival">
          <h3>{timeArrival}</h3>
          <span>{cityArrival}</span>
          <span>{dateArrival}</span>
        </div>
      </SkeletonText>

      <div className="ticket__flight-duration">
        <FaPlaneDeparture
          className="ticket__icon"
        />
        <div>
          {
            true
              ? <span>{flightDuration}</span>
              : null
          }
          <div>
            {/* ProgressLineFlight */}
          </div>
        </div>
        <FaPlaneArrival
          className="ticket__icon"
        />
      </div>


      {
        isLoaded
          ? <div className="ticket__airports-names">
            <Tooltip
              hasArrow
              placement='bottom'
              closeDelay="300ms"
              label={`Flight departs from ${airportDeparture} at ${timeDeparture} (local time)`}
              aria-label={`Flight departs from ${airportDeparture} at ${timeDeparture} (local time)`}
              w="10rem"
            >
              <span>{airportDeparture}</span>
            </Tooltip>

            <Tooltip
              hasArrow
              placement='bottom'
              closeDelay="300ms"
              label={`Flight departs from ${airportArrival} at ${timeArrival} (local time)`}
              aria-label={`Flight departs from ${airportArrival} at ${timeArrival} (local time)`}
              w="10rem"
            >
              <span>TLV</span>
            </Tooltip>
          </div>

          : <SkeletonText className="ticket__airports-names"></SkeletonText>
      }



      <div className="ticket__about-ticket">
        <FlightPropsIcons
          longLayover={longLayover}
          overnightLayover={overnightLayover}
          noBaggage={noBaggage}
          isLoaded={isLoaded}
        />
      </div>


      <IconButton
        className="ticket__button-share"
        isLoading={!isLoaded}
        variant='outline'
        aria-label='Share Ticket'
        icon={<FaShareSquare />}
      />


      <div className="ticket__ticket-footer"></div>
    </div>
  );
}

function FlyCompanies({ airlinesLink, airlinesName, isLoaded }) {
  return (
    <Stack direction='row'>
      <SkeletonCircle
        size='10'
        isLoaded={isLoaded}
      >
        <Tooltip
          hasArrow
          placement='bottom'
          closeDelay="300ms"
          label={airlinesName}
          aria-label={airlinesName}         
        >
          <Avatar
            bg='brand.200'
            name={airlinesName}
            src={airlinesLink}
          />
        </Tooltip>
      </SkeletonCircle>
    </Stack>
  )
}

function FlightPropsIcons(
  { longLayover,
    overnightLayover,
    noBaggage,
    isLoaded
  }) {



  return (
    <>
      <Skeleton isLoaded={isLoaded}>
        <Tooltip hasArrow
          label='Long Layover'
          bg='gray.300'
          color='black'
        >
          <IconButton hidden={!longLayover}
            colorScheme='red'
            variant='outline'
            aria-label='Long Layover'
            icon={<FaClock />}
          />
        </Tooltip>
      </Skeleton>

      <Skeleton isLoaded={isLoaded}>
        <Tooltip hasArrow
          label='Baggage not included'
          bg='gray.300'
          color='black'
        >
          <IconButton hidden={!noBaggage}
            colorScheme='red'
            variant='outline'
            aria-label='Baggage not included'
            icon={<FaSuitcaseRolling />}
          />
        </Tooltip>
      </Skeleton>

      <Skeleton isLoaded={isLoaded}>
        <Tooltip hasArrow
          label='Overnight Layover'
          bg='gray.300'
          color='black'
        >
          <IconButton hidden={!overnightLayover}
            className="ticket__button-share"
            colorScheme='red'
            variant='outline'
            icon={<FaMoon />}
          />
        </Tooltip>
      </Skeleton>

    </>



  );
}
