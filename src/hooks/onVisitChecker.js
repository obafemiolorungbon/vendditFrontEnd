// this hook primarily checks for the user cookie immediately they visi tthe website
//by sending a request to the server side route that responds with a their details
//if they are registered and pushes them home or a null user if this is their first time

import { useState,useEffect } from "react";
import axios from "axios"
axios.defaults.withCredentials = true

export const useVisitChecker = () =>{
    const [user, setUser] = useState(null);
    // the idea behind the loading state is to show something to your user while the
    //axios request to get cookies is sent, since you can't tell how long it will take
    const [isLoading, setLoading] = useState(true);
    
    useEffect(()=>{
        async function getUser () {
           await axios.get(process.env.REACT_APP_GET_COOKIES)
           .then(res =>{
               //set the user state as the current user
               setUser(res.data.currentUser)
               //meaning that the result is back and loading screen can now go off
               setLoading(false)
           }).catch(err => {
               setLoading(false)
           })
        }

        getUser()

    },[])

    return {
        setUser,
        user,
        isLoading
    }

}