import React from "react";
import tw from "twin.macro";
import styled from "styled-components"
const Label = tw.label`inline-block mb-1 font-medium self-start`;
const Input = tw.input`flex-grow-default w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400
                focus:outline-none focus:shadow-outline`;
const TextArea = tw.textarea`flex-grow-default w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400
                focus:outline-none focus:shadow-outline`;

const TextAreas = styled(TextArea)`resize:none; height:100px;`

export const FormInput = ({
  name,
  labelName,
  placeholder,
  type,
  touched,
  onChange,
  value
}) => {
  return (
    <div className="mb-1 sm:mb-2 w-full ">
      <Label className="">
        {labelName}
      </Label>
      <Input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        touched={touched}
        className=""
      />
    </div>
  );
};

export const TextAreaComponent = ({
  name,
  labelName,
  placeholder,
  type,
  onChange,
  value,
}) => {
  return (
    <div className="mb-1 sm:mb-2 w-full ">
      <Label className="">{labelName}</Label>
      <TextAreas
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className=""
      />
    </div>
  );
};

