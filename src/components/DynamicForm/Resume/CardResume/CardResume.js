import { Card } from 'react-bootstrap';
import './CardResume.css';

export default function CardResume({title, text, subtitle}) {
  return (
    <Card className='text-center p-2 card-resume'>
        <Card.Body>
            <Card.Subtitle>
                <b>{subtitle}</b>
            </Card.Subtitle>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
  )
}
