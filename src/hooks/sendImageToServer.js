import { GetFormData } from "utils/getFormData";
import axios from "axios"
axios.defaults.withCredentials=true;

export const sendImageToServer = (values) =>{
    return new Promise((resolve,reject)=>{
        const formData = new FormData();
        const dataToSend = GetFormData(values, formData);
        axios({
            url: process.env.REACT_APP_IMAGE_UPLOAD,
            headers: { "content-type": "multipart/form-data" },
            method: "POST",
            data: dataToSend,
        })
        .then((response) => {
            resolve(response)
        })
        .catch((err) => {
            if (err) {
                reject(err)
            }
        });        
    })
}
