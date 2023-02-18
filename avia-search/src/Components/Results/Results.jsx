import { ResultsSort } from './ResultsSort/ResultsSort';
import { Ticket } from './Ticket/Ticket';
import './Results.scss';



export default function Results({ }) {
  return (

    <div className="results">
      <ResultsSort />
      <div className='results-ticket-container'>
        <Ticket
          isLoaded
          ticketPrice={1500}
        />
        <Ticket
          isLoaded
          ticketPrice={1500}
        />
        <Ticket />
      </div>
    </div>
  );
}
