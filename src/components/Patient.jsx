import { Link } from 'react-router-dom'

export default function Patient({ patient }){

    const id = patient.url.split("/")[4];
    console.log(id)

    return(
        <div>
            <Link to={`/patients/${id}`}>
                <h1>{patient.name}</h1>
            </Link>
        </div>
    )
}