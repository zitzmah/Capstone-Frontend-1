import { Link, Form, useLoaderData } from "react-router-dom"

export default function Show(props){

    const aPatient = useLoaderData()
    const id = aPatient?.url.split("/")[4]

    return(
        <div>
            <h1>{aPatient.name}</h1>
            <h2>{aPatient.dateOfBirth}</h2>
            <h2>{aPatient.mrn}</h2>

            <div>
                <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="name">
                        Change patient name:
                        <input type="text" id="name" name="name" defaultValue={aPatient.name}/>
                    </label>

                    <label htmlFor="dateOfBirth">
                        Change date of birth:
                        <input type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={aPatient.dateOfBirth}/>
                    </label>

                    <label htmlFor="sex">
                        Change patient sex:
                        <input type="text" id="sex" name="sex" defaultValue={aPatient.sex}/>
                    </label>

                    <label htmlFor="mrn">
                        Change medical record number:
                        <input type="number" id="mrn" name="mrn" defaultValue={aPatient.mrn}/>
                    </label>

                    <label htmlFor="bloodType">
                        Change blood type:
                        <input type="text" id="bloodType" name="bloodType" defaultValue={aPatient.bloodType}/>
                    </label>

                    <label htmlFor="antibodyScreen">
                        Change antibody screen result:
                        <input type="text" id="antibodyScreen" name="antibodyScreen" defaultValue={aPatient.antibodyScreen}/>
                    </label>

                    <label htmlFor="antibodyID">
                        Change antibody id:
                        <input type="text" id="antibodyID" name="antibodyID" defaultValue={aPatient.antibodyID}/>
                    </label>

                    <button>Update Patient Information</button>
                </Form>

                <Form action={`/delete/${id}/`} method="post">
                    <button>Delete Patient Information</button>
                </Form>
            </div>

            <Link to="/">
                <button>Return to Home Page</button>
            </Link>

        </div>
    )
}

// name=models.CharField(max_length=100)
//     dateOfBirth=models.DateField()
//     sex=models.CharField(max_length=100)
//     mrn=models.IntegerField()
//     bloodType=models.CharField(max_length=3, default='')
//     antibodyScreen=models.CharField(max_length=20, default='')
//     antibodyID=models.CharField(max_length=50, default='')