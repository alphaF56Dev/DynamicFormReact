import { Card } from "react-bootstrap";
import './CardResume';

export default function CardResumeHobbie({subtitle, hobbies, text}) {
  return (
    <div>
    <Card className="text-center p-2 card-resume">
        <Card.Body>
            <Card.Subtitle><b>{subtitle}</b></Card.Subtitle>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby.label}</li>
                ))}
            </ul>
        </Card.Body>
    </Card>
    {text && (
        <Card className="text-center p-2 card-resume">
            <Card.Body>
                <Card.Subtitle><b>Your additional(s) hobby(ies)</b></Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )}
    </div>
  )
}
