import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getAllEmployee() {
    await axios.get(`${API_URL}/employee`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

export async function getOneEmployee() {
    await axios.get(`${API_URL}/employee/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}