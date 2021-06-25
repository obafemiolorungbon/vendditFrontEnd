import { GetFormData } from "utils/getFormData";

export const uploadImageToColudinary = ({productName,file}) => {
  return new Promise((resolve,reject)=>{
    let imageUrl;
    const cloudName = process.env.REACT_APP_CLOUDINARY_USERNAME
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const request = new XMLHttpRequest();
    const formData = new FormData();
    request.open("POST", url, true);
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.onreadystatechange = (e) => {
      if (request.readyState === 4 && request.status === 200) {
        const response = JSON.parse(request.responseText);
        // response contain response secure url to the image, which is what 
        // we need
        imageUrl = response.secure_url
        resolve(imageUrl);
      }
    };
    // send data to cloudinary using form data
    const uploadName = process.env.REACT_APP_CLOUDINARY_PRESET
    let payload = {
      upload_preset: uploadName,
      tags: productName,
      file: file,
    };
    // append the options to the form data
    const dataTosend = GetFormData(payload,formData)
    request.send(dataTosend)
    // send image to cloudinary
    
  })
};
