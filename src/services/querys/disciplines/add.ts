import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const newDisciplines = {};

export async function AddNewDisciplines() {
    await axios.post(`${API_URL}/disciplines`, newDisciplines)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}