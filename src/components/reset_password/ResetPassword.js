import {React,useState} from "react"
import {useFormik} from "formik"
import * as yup from "yup"
import axios from "axios"
import tw from "twin.macro"
import FormData from "form-data"
import {GetFormData} from "utils/getFormData"
import {ResetRequestBase} from "components/misc/ResetPasswordBase"
import {FormInput, ValidationError,ServerValidation} from "components/misc/Forms"
import { useHistory } from "react-router-dom"

const Form = tw.form`flex flex-col items-center gap-2 w-full mb-4 md:flex-row md:px-16`;
const SubmitButton = tw.button`inline-flex items-center justify-center w-full h-12 px-4 mt-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-1/2 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`;



export const ResetPassword =({setAccess:setResetAccess})=>{
    const [serverError, setServerError] = useState("")
    const history = useHistory()

    const formik = useFormik({
        initialValues:{
            email:''
        },validationSchema:yup.object({
            email:yup.string().email("Sorry, but you need to enter a valid email").required("You need to enter your email")
        }),
        onSubmit:values=>{
            const formObj = new FormData()
            const dataToSend = GetFormData(values,formObj)
            axios({
              method: "POST",
              data: dataToSend,
              url: process.env.RESET_PASSWORD||"http://localhost:5000/users/reset-password",
              headers: { "content-type": "application/x-www-form-urlencoded" },
            })
              .then((results) => {
                setResetAccess(true)
                history.push("/reset-request-success")
              })
              .catch((error) => {
                setServerError(error.response.data.message);
                console.log(error.response.data.message);
              });
        }
    })

    return (
      <ResetRequestBase>
        <Form onSubmit={formik.handleSubmit}>
          <FormInput
            placeholder="Your Account's Email"
            type="email"
            name="email"
            labelName="Your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errors={formik.errors.email}
            touched={formik.touched.email}
          />

          <SubmitButton type="submit">Reset password</SubmitButton>
          <ServerValidation error={serverError} />
          <ValidationError
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
        </Form>
      </ResetRequestBase>
    );
}