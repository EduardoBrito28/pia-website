import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateCourses = {};

export async function UpdateCourses() {
    await axios.put(`${API_URL}/courses/:id`, updateCourses)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}