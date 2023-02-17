import { ResultsSort } from './ResultsSort/ResultsSort';
import { Ticket } from './Ticket/Ticket';
import './Results.scss';



export default function Results({ }) {
  return (

    <div className="results">
      <ResultsSort />
      <div className='results-ticket-container'>  
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          </div>
    </div>
  );
}
