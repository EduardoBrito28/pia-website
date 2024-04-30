import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateDisciplines = {};

export async function UpdateDisciplines() {
    await axios.put(`${API_URL}/disciplines/:id`, updateDisciplines)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}