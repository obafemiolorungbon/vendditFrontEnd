import React, { useState } from "react"
import tw from "twin.macro"
import { FormInput,ValidationError,SubmitButton,ServerValidation } from "components/misc/Forms"
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import FormData from "form-data"
import { GetFormData } from "utils/getFormData"
import { useHistory } from "react-router-dom";

const Form = tw.form`flex flex-col items-center w-full mb-4  md:px-16`;
const Submit = tw(
  SubmitButton
)`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`;
export const ResetPage = ({setAccess:setResetAccess}) => {
    const history = useHistory()
    const [serverError, setServerError] = useState("")
    //get the token and user_id from the url, to send with the new password
    let queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    const formik = useFormik({
        initialValues:{
            password:"",
            confirmPassword:""
        },
        validationSchema:yup.object({
            password:yup.string().min(5,"Password has to be more than 5 characters").required("You must enter a valid password"),
            confirmPassword:yup.string().min(5,"password has to be 5 characters").required("You must enter a valid password").oneOf([yup.ref("password")],"Both password have to be the same")
        }),
        onSubmit: values =>{
            const formData = new FormData();
            formData.append("token", urlParams.get("token"))
            formData.append("userId", urlParams.get("id"))
            const dataToSend = GetFormData(values,formData)
            axios({
              url:
                process.env.REACT_APP_RESET_CONFIRM ||
                "http://localhost:5000/users/reset-confirm",
              data: dataToSend,
              headers: { "Content-Type": "multipart/form-data" },
              method: "POST",
            })
              .then((response) => {
                //set access to protected route
                setResetAccess(true);
                console.log(response);
                //if response indicates success, proceed to reset success page
                history.push("/reset-success");
              })
              .catch((error) => {
                //if failed then set as validation error from server
                setServerError(error.response.data.message);
              });
        }  
    })
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
        <div className="text-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Welcome
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="b039bae0-fdd5-4311-b198-8557b064fce0"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Choose</span>
              </span>{" "}
              a new password
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Enter your new password below, ensure to enter the same password
              in the confirm box
            </p>
          </div>
          <Form onSubmit={formik.handleSubmit}>
            <FormInput
              name="password"
              placeholder="New Password"
              type="password"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              errors={formik.errors.password}
              touched={formik.touched.password}
            />
            <ValidationError
              errors={formik.errors.password}
              touched={formik.touched.password}
            />
            <FormInput
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              errors={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
            />

            <ValidationError
              errors={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
            />
            <Submit text="Change Password" />
            {/* displays validation error from server */}
            <ServerValidation
              error = {serverError}
            />
          </Form>
          <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
            By clicking submit, you are going to change the password associated
            with your account
          </p>
        </div>
      </div>
    </div>
  );
};
