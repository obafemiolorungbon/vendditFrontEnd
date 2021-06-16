import axios from "axios";
import { useFormik } from "formik";
import { useConfirmUser } from "hooks/confirmUser";
import {
  FormInput,
  SignInButton,
  ForgottenPassword,
  ValidationError,
  ServerValidation
} from "components/misc/Forms";
import { SignInBase } from "components/misc/SignInBase";
import * as yup from "yup"
axios.defaults.withCredentials = true


const Signin = () => {


  const { loginUser, error } = useConfirmUser()

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) =>{
        await loginUser(values)
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
          <ServerValidation error={error} />
          <ForgottenPassword />
        </div>
      </form>
    </SignInBase>
  );
};

export default Signin