import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getAllCourses() {
    await axios.get(`${API_URL}/courses`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

export async function getOneCourses() {
    await axios.get(`${API_URL}/courses/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}