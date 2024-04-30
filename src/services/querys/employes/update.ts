import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateEmployee = {};

export async function UpdateEmployee() {
    await axios.put(`${API_URL}/employee/:id`, updateEmployee)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}