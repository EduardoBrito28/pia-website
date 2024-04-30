import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateUser = {};

export async function UpdateUsers() {
    await axios.put(`${API_URL}/users/:id`, updateUser)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}