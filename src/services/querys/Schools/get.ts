import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getAllSchools() {
    await axios.get(`${API_URL}/schools`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

export async function getOneSchool() {
    await axios.get(`${API_URL}/schools/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}