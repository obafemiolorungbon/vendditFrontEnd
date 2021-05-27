import React,{ useState } from "react"
import tw from "twin.macro"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { useFormik }  from "formik"
import {FormInput,ServerSuccess, SubmitButton,SignInInstead,ButtonWrappers,ValidationError,ServerValidation} from "components/misc/Forms"
import SignUpBase from "components/misc/SignUpBase"
import FormData from "form-data"
import { GetFormData } from "utils/getFormData"
import * as yup from "yup";


const TandC = tw.p`text-xs text-gray-600 sm:text-sm `;

const SignUp = ()=>{
  const [error,setErrors] = useState("")
  const [success,setSuccess]=useState("")
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      businessName: "",
      productName: "",
      general:""
    },
    onSubmit: (values) => {
      const formData = new FormData()
      const dataToSend = GetFormData(values,formData)
      axios({
        
        url:"http://localhost:5000/users/signup",
        headers:{"content-type":"multipart/form-data"},
        method:"POST",
        data:dataToSend
      }).then(response=>{
        setSuccess("Sign up Successful, now redirectiong to Log in Page")
        setTimeout(()=>{

          history.push("/signin")

        },3000)
        console.log(response)
      }).catch(err=>{
        if (err){
          setErrors(err.response.data.message)
          return
        }
      })
    },
    validationSchema:yup.object({
      email:yup.string().email("Invalid Email Address").required("Your email is needed"),
      businessName:yup.string().min(5,"Business name should be atleast 5 characters").required("Your business name is special, do tell"),
      productName:yup.string().max(15,"Product name should not exceed 15 characters").required("We need to know what your product is, dont be shy"),
      password:yup.string().min(5, "Your password needs to be atleast five characters").required("You know we can't let you register without a password, right?")
    })
    
  });


  return (
    <div>
      <SignUpBase>
        <>
          <form onSubmit={formik.handleSubmit}>
            <FormInput
              name="businessName"
              labelName="Brand Name"
              placeholder="WatchHavens"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.businessName}
              errors={formik.errors.businessName}
              touched={formik.touched.businessName}
            />
            <ValidationError
              errors={formik.errors.businessName}
              touched={formik.touched.businessName}
            />
            <FormInput
              name="productName"
              labelName="Product Type"
              placeholder="Mobile Phones"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
              errors={formik.errors.productName}
              touched={formik.touched.productName}
            />
            <ValidationError
              errors={formik.errors.productName}
              touched={formik.touched.productName}
            />
            <FormInput
              name="email"
              labelName="Your Email"
              placeholder="sample@email.com"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              errors={formik.errors.email}
              touched={formik.touched.email}
            />
            <ValidationError
              errors={formik.errors.email}
              touched={formik.touched.email}
            />
            <FormInput
              name="password"
              labelName="Your Password"
              placeholder="**********"
              type="password"
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

            <ButtonWrappers>
              <SubmitButton text="Sign Me Up" />
              <ServerValidation
               error={error}
              />
              <ServerSuccess
                success = {success}
              />
              <SignInInstead text="Sign In Instead" />
            </ButtonWrappers>
            <TandC>
              By signing up, you agree to all terms and conditions provided by
              Venddit
            </TandC>
          </form>
        </>
      </SignUpBase>
    </div>
  );
}

export default SignUp

