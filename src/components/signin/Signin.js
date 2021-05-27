import {React,useState} from "react"
import axios from "axios";
import {useHistory} from "react-router-dom"
import { useFormik } from "formik";
import {
  FormInput,
  SignInButton,
  ForgottenPassword,
  ValidationError,
  ServerValidation
} from "components/misc/Forms";
import {SignInBase} from "components/misc/SignInBase";
import FormData from "form-data";
import { GetFormData } from "utils/getFormData";
import * as yup from "yup"


const Signin = ({setSignIn}) => {
  const [errors,setErrors]  = useState("")
  let history = useHistory()
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        const formData = new FormData();
        const dataTosend = GetFormData(values, formData);
        axios({
          method: "POST",
          url: "http://localhost:5000/users/signin",
          headers: { "content-type": "multipart/form-data" },
          data: dataTosend,
        })
          .then((response) => {
            setSignIn(true)
            console.log(response);
            history.push("/dashboard")
            return;
          })
          .catch((error) => {
            if (error) {
              console.log(error)
              setErrors(error.response.data.message)
            }
          });
      },
      validationSchema: yup.object({
        email: yup.string().email("That is infact, not a valid email").required("We need your email to log you"),
        password:yup.string().required("We need your password too")
      }),
    });
  return (
    <SignInBase>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-1 sm:mb-2">
          <FormInput
            name="email"
            labelName="Your Email"
            placeholder="sample@gmail.com"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            signin="yes"
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
          <ValidationError
            errors={formik.errors.email}
            touched={formik.touched.email}
          />

          <FormInput
            name="password"
            labelName="Your password"
            placeholder="***********"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            signin="yes"
            errors={formik.errors.password}
            touched={formik.touched.password}
          />
          <ValidationError
            errors={formik.errors.password}
            touched={formik.touched.password}
          />
          <SignInButton />
          <ServerValidation error={errors} />
          <ForgottenPassword />
        </div>
      </form>
    </SignInBase>
  );
};

export default Signin