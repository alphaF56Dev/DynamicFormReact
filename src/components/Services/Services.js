import './Services.css';
import {Col, Container, Row} from 'react-bootstrap';
import nodejs from '../../assets/img/nodejs.jpg'
import vuejs from '../../assets/img/vue.jpg'
import devMovil from '../../assets/img/desarrollo-movil.png'
import CardService from './CardService/CardService';

export default function Services() {
    const arrayServices = [
        {
            title: "Node JS API Development for Beginners", 
            subtitle: "I learned about Node JS",
            image: nodejs,
            footer: "Go to the project ➡️",
            link: "!#"
        },
        {
            title: "Mobile Application Development", 
            subtitle: "I learn about mobile development",
            image: devMovil,
            footer: "Go to the certificate ➡️",
            link: "!#"
        },
        {
            title: "VUE JS 3 crash cuurse for beginners 2022", 
            subtitle: "I learned about VUE JS 3",
            image: vuejs,
            footer: "Go to the project ➡️",
            link: "!#"
        }
    ];



  return (
    <div className='services p-4 mt-5'>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8}>
                    <h2 className='text-center'>Services</h2>
                    <h4 className='pb-3 text-center'>Some projects with which I have practiced</h4> {/*pb= padding bottom*/}
                    <Row xs={12} md={3} className='g-4 mt-4'>
                        {arrayServices.map((service, index)=>(
                            <CardService service={service} key={index} />
                        ))}                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
