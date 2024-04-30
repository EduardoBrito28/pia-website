import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const newCourse = {};

export async function AddNewCourses() {
    await axios.post(`${API_URL}/courses`, newCourse)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}