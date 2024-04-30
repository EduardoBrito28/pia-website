import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function DeleteUsers() {
    await axios.delete(`${API_URL}/users/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}