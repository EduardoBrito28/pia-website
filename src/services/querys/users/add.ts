import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const newUser = {};

export async function AddNewUsers() {
    await axios.post(`${API_URL}/users`, newUser)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}