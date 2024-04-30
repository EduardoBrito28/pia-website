import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const newUnivercity = {};

export async function AddNewUnivercitys() {
    await axios.post(`${API_URL}/univercity`, newUnivercity)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error))
}