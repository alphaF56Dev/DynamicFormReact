import { Button, Card, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbie from "./CardResume/CardResumeHobbie";


export default function Resume({modal, setModal, setStep}) {
    const closeModal=() =>{
        localStorage.clear();
        setModal(false);
        setStep(1);
        //console.log("Se cerro el modal");
    }

    const sIcon = localStorage.getItem("sportIcon");
    const sName = localStorage.getItem("sportName");
    const hobbies = JSON.parse(localStorage.getItem("hobbies"));
    const aComment = localStorage.getItem("additional_comment");
    const aHobbies = localStorage.getItem("additionalActivity");

  return (
    <>
        <Modal show={modal} size="lg" aria-labelledby="contained-modal-title-center" centered>
            <Modal.Header closeButton onHide={closeModal}>
                <Modal.Title>Congratulations 🥳 🎊 🎉</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Here is your resume</h4>
                <Card>
                    <CardGroup className="m-4">
                        {sIcon && sName && (
                            <CardResume title={sIcon} subtitle="Your favorite sport" text={sName}/>
                        )}
                        {hobbies &&(
                            <CardResumeHobbie subtitle="Your hobbies" text={aHobbies} hobbies={hobbies}/>
                        )}
                        {aComment && (
                            <CardResume subtitle="Additional comment added" text={aComment} />
                        )}
                    </CardGroup>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => closeModal()} variant="outline-dark">
                    Exit and clear information
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
