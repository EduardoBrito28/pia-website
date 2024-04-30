import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const newEmployee = {};

export async function AddNewUsers() {
    await axios.post(`${API_URL}/employee`, newEmployee)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}