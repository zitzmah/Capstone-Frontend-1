import Patient from '../components/Patient'
import { Form, useLoaderData } from 'react-router-dom'
import StyledButton from '../components/Button/Button'

export default function Index(props){
    const allPatients = useLoaderData()

    return(
        <>
            <h1>Blood Bank App</h1>
            <hr/>
            <h3>Add a New Patient</h3>
            <Form action="/create" method="post">
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
                    Mecical Record Number:
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
            {allPatients.map((patient, i)=> <Patient patient={patient} key={i}/>)}
        </>
    )
}