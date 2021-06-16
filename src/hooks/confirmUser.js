import { useContext, useState } from "react"
import UserContext from "hooks/userContext"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { GetFormData } from "utils/getFormData";
axios.defaults.withCredentials = true


export const useConfirmUser = ()=>{
    const [error, setErrors] = useState("");
    const [success, setSuccess] = useState("");
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    const setUserContext = async ()=>{
        return await axios.get(process.env.REACT_APP_GET_COOKIES)
        .then(res =>{
            //get the user data from the API and set it as the global context, pushing the
            //user home after the check. Not to worry, dashboard comp. will take care of the auth
            setUser(res.data.currentUser)
            history.push("/dashboard")
        }).catch(err =>{
        });

    }

    const registerNewUser = async (values) =>{
            const formData = new FormData();
            const dataToSend = GetFormData(values, formData);
            return axios({
                url: process.env.REACT_APP_SIGN_UP_URL,
                headers: { "content-type": "multipart/form-data" },
                method: "POST",
                data: dataToSend,
            })
            .then((response) => {
                setErrors("");
                setSuccess("Sign up Successful, now redirecting to Your Page");
                setUserContext()
            })
            .catch((err) => {
                if (err) {
                    try {
                        setErrors(err.response.data.message);
                    } catch (err) {
                        setErrors("Registration Error, Try Again Later")
                    }
                    return;
                }
            });        

    }

    const loginUser = async (values)=>{
          const formData = new FormData();
          const dataTosend = GetFormData(values, formData);
         return axios({
            method: "POST",
            url: process.env.REACT_APP_SIGN_IN_URL,
            headers: { "content-type": "multipart/form-data" },
            data: dataTosend,
          })
          .then((response) => {
            setErrors("")
            setUserContext()
        })
            .catch((error) => {
              if (error) {
                setErrors(error.response.data.message);
              }
            });
      
    }

    return {
        registerNewUser,
        loginUser,
        error,
        success
    }


}


