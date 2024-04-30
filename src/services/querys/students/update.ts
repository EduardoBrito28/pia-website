import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateStudents = {};

export async function UpdateStudents() {
    await axios.put(`${API_URL}/students/:id`, updateStudents)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}