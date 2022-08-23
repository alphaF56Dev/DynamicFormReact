import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardSport from './CardSport';
import './FirstStep.css'

export const sports = [
  {
    id: 1, 
    icon: "⚽️", 
    name: "Soccer", 
    description: "A sport where two teams with eleven players each one which have to kick a ball to score a goal"
  },{
    id: 2, 
    icon: "🏀", 
    name: "Basketball", 
    description: "A sport where two teams, communly with five players each one try to score a basket"
  },{
    id: 3, 
    icon: "🎱", 
    name: "Bowling", 
    description: "A sport where players try to knock down bowling pins throwing a wood ball agains them"
  }
];

export default function FirstStep() {

  const [selectedSport, setSelectedSport] = useState(null);

  const clickSport = (sport) => {
    setSelectedSport(sport);
    localStorage.setItem('sportName', sport.name);
    localStorage.setItem('sportIcon', sport.icon);
  };

  return (
    <div>
      <h2>Choose your favorite fruit</h2>
      <h4>Select your favorite fruit and then click "Next step"</h4>
      <Container className='p-5 text-center'>
        <Row>
          {/* <p>This is a test</p> */}
          {sports.map((sport, index)=>(
            <CardSport sport={sport} key={index} clickSport={clickSport} selectedSport={selectedSport}/>
          ))}
        </Row>
      </Container>
    </div>
  );
}
