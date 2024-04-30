import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getAllDisciplines() {
    await axios.get(`${API_URL}/disciplines`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

export async function getOneDisciplines() {
    await axios.get(`${API_URL}/disciplines/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}