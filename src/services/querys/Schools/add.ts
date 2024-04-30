import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const newSchools = {};

export async function AddNewSchools() {
    await axios.post(`${API_URL}/schools`, newSchools)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}