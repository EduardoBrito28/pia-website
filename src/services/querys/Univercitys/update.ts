import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const updateUnivercitys = {};

export async function UpdateUnivercitys() {
    await axios.put(`${API_URL}/univercitys/:id`, updateUnivercitys)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}