import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import './SecondStep';

const options = [
  {id: 1, value:"computer", label: "💻 Computer"},
  {id: 2, value:"play", label: "🎼 Play"},
  {id: 3, value:"music", label: "🎧 Music"},
  {id: 4, value:"photo", label: "📸 Photo"},
  {id: 5, value:"swim", label: "🏊🏻‍♂️ Swim"},
  {id: 6, value:"run", label: "🏃🏼 Run"}
];

export default function SecondStep() {
  const [selectOption, setSelectOption] = useState(null);

  const hobbiesSel = JSON.stringify(selectOption);

  localStorage.setItem('hobbies', hobbiesSel);

  const changeAdditionalAct = (e) =>{
    const newActivity = e.target.value;
    localStorage.setItem('additionalActivity', newActivity);
  };

  return (
    <div>
      <h2>Select your favorite activities</h2>
      <h4>Tell me about your hobbies</h4>
      <Container className='p-5 text-center'>
        <Row className='justify-content-md-center'>
          <Col lg="7">
            <h5>Select your favorite hobbies</h5>
            <Select defaultValue={selectOption} onChange={setSelectOption} options={options} isSearcheable isMulti />
          </Col>
          <Col lg="7" className='mt-4'>
            <h5>Do you want to add another activity?</h5>
            <Form.Control type="text" placeholder='Tae Kwon Do' onChange={(e)=>changeAdditionalAct(e)} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
