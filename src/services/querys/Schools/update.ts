import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateSchools = {};

export async function UpdateSchools() {
    await axios.put(`${API_URL}/schools/:id`, updateSchools)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}