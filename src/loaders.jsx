const URL = import.meta.env.VITE_BASE_URL
console.log(URL)

export const indexLoader = async () => {

    try{
    const response = await fetch (`${URL}`)
    const allPatients = await response.json()
    return allPatients
    }catch(error){
        console.log(error)
        return error
    }
}

export const showLoader = async ({params}) => {
    const response = await fetch(`${URL}${params.id}`)
    const aPatient = await response.json()
    return aPatient
}