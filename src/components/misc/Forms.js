import React from "react";
import tw from "twin.macro"
import styled from "styled-components"
import {Link} from "react-router-dom";
import styles from "./Forms.module.css"

const Label = tw.label`inline-block mb-1 font-medium self-start`;
const Input = tw.input`flex-grow-default w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400
                focus:outline-none focus:shadow-outline`;

export const FormInput = ({name,labelName,placeholder,type,onChange,onBlur,value,errors,touched,signin}) =>{

    return (
      <div className="mb-1 sm:mb-2 w-full ">
        <Label className={signin ? `${styles.signInText}`:''} htmlFor={name}>{labelName}</Label>
        <Input
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className = {errors && touched ? `${styles.animated} ${styles.shake} ${styles.redborder}`:null}
        />
      </div>
    );

}

export const ButtonWrappers = ({children})=>{
  return(
    <div className=" flex flex-col items-center justify-center mt-4 mb-2 sm:mb-4 ">
      {children}
    </div>
  )
}

const SignUpButton = tw.button`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700
                focus:shadow-outline focus:outline-none `;


export const SubmitButton = ({text})=>{

    return(
    <>
        
     <SignUpButton
       type="submit"
     >
       {text}
     </SignUpButton>
    </>
    )
}

const ValidationDiv = styled.div`color:red; font-style:italic;`
export const ValidationError = ({touched,errors})=>{
    return(
        <div >
            {touched && errors ? (
            <ValidationDiv tw="text-red-500 mb-2">{errors}</ValidationDiv>
            ) : null}
        </div>
    )
}

export const ServerValidation = ({error})=>{
  return (
    <div>
      {error ? (
        <ValidationDiv className="text-red-500 mt-4 mb-2">{error}</ValidationDiv>
      ) : null}
    </div>
  );
}
const SuccessDiv = styled.div`
  color: greenyellow;
  font-style: italic;
`;
export const ServerSuccess = ({ success }) => {
  return (
    <div>
      {success ? (
        <SuccessDiv tw="text-green-500 mt-4 mb-2">
          {success}
        </SuccessDiv>
      ) : null}
    </div>
  );
};

export const SignInInstead = ({text})=>{

    return (
      <Link
        to="/signin"
        className="inline-flex mt-4 items-center justify-center w-xl h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-400 hover:bg-gray-700
                focus:shadow-outline focus:outline-none"
      >
        {text}
      </Link>
    );
}

export const SignInButton = ()=>{
  return (
    <div className="mt-4 mb-2 sm:mb-4">
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Sign in
      </button>
    </div>
  );
}


export const ForgottenPassword =()=>{
  return (
    <div className=" flex justify-center alignmt-4 mb-2 sm:mb-4">
      <Link
        to="/reset-password"
        className="inline-flex items-center justify-center w-xl h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-gray-500 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
      >
        forgot password?
      </Link>
    </div>
  );
}