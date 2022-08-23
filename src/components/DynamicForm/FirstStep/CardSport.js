import { Card, Col } from "react-bootstrap";


export default function CardSport({sport, clickSport, selectedSport}) {
  return (
    <Col className={`card-sport mt-2 ${(selectedSport && selectedSport.id === sport.id) ? "selected-card" : ""}`}>
        <Card>
            <Card.Body onClick={() => clickSport(sport)} key={sport.id}>
                <Card.Title>{sport.icon}</Card.Title>
                <Card.Subtitle>{sport.name}</Card.Subtitle>
                <Card.Text>{sport.description}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}
