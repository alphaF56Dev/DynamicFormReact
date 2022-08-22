import { Button, Col, Container, Row } from 'react-bootstrap'
import './Introduction.css'

export default function Introduction() {
  return (
    <div className='introduction p-3 p-lg-5 mt-5'>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8}>
                    <h1 className='pl-2 text-center'>
                        Welcome to Dynamic Form<br />
                        <span className='pt-2 pb-4'>
                            that you will do everything that you want
                        </span>
                    </h1>
                    <h4 className='text-center pt-3'>
                        Hello, I am Alex Fierro, I'm 25 years old. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint id aspernatur ipsam provident numquam. Deserunt, sit magni eveniet expedita animi optio esse natus atque quae ratione nemo rerum, itaque dolorem? Blanditiis aspernatur aut explicabo ex, qui saepe incidunt veniam illum harum reiciendis exercitationem repellendus facere neque, ut beatae, ab fuga?
                    </h4>
                    <div className='d-flex container-actions mt-5'>
                        <div className='container-buttons'>
                            <Button className='p-3' onClick={()=>console.log('Click button')} >
                                Get in touch
                            </Button>
                            <Button className='p-3'>Get in touch</Button>
                        </div>
                        <div className='btn-start-create'>
                            <a href="#dynamic-form">🆕Start to create</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
