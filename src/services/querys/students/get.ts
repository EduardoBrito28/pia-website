import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getAllStudents() {
    await axios.get(`${API_URL}/student`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

export async function getOneStudent() {
    await axios.get(`${API_URL}/student/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}