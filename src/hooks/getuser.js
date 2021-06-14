import axios from "axios"
const setUserContext = async () => {
  return await axios
    .get(process.env.REACT_APP_GET_COOKIES,{ withCredentials:true })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });
};

export default setUserContext
