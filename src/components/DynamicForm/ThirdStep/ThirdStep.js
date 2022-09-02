import { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './ThirdStep.css';

export default function ThirdStep() {
  const [modal, setModal] = useState(false);
  const onChangeComment = (e) => {
    const tValue = e.target.value;
    localStorage.setItem('additional_comment', tValue);
  }
  return (
    <div>
      <h2>Third step</h2>
      <h4>Do you want to add an additional comment?</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="md-3">
              <Form.Control as="textarea" placeholder="leave a comment" onChange={(e) => onChangeComment(e)}></Form.Control>
            </FloatingLabel>            
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={()=>console.log('view result')}>
            View result 😉
          </p>
        </div>
      </Container>
    </div>
  )
}
