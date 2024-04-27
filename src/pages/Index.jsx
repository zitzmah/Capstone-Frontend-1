import { useState } from 'react';
import Patient from '../components/Patient';
import { Form, useLoaderData } from 'react-router-dom';
import StyledButton from '../components/Button/Button';
// import Header from '../components/Header';


function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default function Index(props){
    const allPatients = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <>
            <div>
                {/* <Header/> */}
            </div>

            <StyledButton onClick={openModal}>Add New Patient</StyledButton>
            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h3>Add a New Patient</h3>
              <Form action="/create" method="post" className="form">
                <label htmlFor="name">
                    Patient Name:
                    <input type="text" name="name" id="name"/>
                </label>

                <label htmlFor="dateOfBirth">
                    Date of Birth:
                    <input type="date" name="dateOfBirth" id="dateOfBirth"/>
                </label>

                <label htmlFor="sex">
                    Sex:
                    <input type="text" name="sex" id="sex"/>
                </label>

                <label htmlFor="mrn">
                    Medical Record Number:
                    <input type="number" name="mrn" id="mrn"/>
                </label>

                <label htmlFor="bloodType">
                    Blood Type:
                    <input type="text" name="bloodType" id="bloodType"/>
                </label>

                <label htmlFor="antibodyScreen">
                    Antibody Screen Result:
                    <input type="text" name="antibodyScreen" id="antibodyScreen"/>
                </label>

                <label htmlFor="antibodyID">
                    Antibody ID:
                    <input type="text" name="antibodyID" id="antibodyID"/>
                </label>
                <StyledButton>Add New Patient</StyledButton>
              </Form>
            </Modal>

            <div className="patient-list">
              {allPatients.map((patient, i)=> <Patient patient={patient} key={i}/>)}
            </div>
        </>
    );
}
