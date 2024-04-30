import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getAllUsers() {
    await axios.get(`${API_URL}/users`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

export async function getOneUser() {
    await axios.get(`${API_URL}/users/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}