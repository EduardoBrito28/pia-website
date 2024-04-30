import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function DeleteUnivercitys() {
    await axios.delete(`${API_URL}/univercity/:id`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}