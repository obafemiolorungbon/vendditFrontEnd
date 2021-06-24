import React, { useContext, useRef } from "react";
import { FormInput, TextAreaComponent } from "./FormComponent";
import { TemplateContext } from "hooks/TemplateContext";
import { UploadButton} from "components/Buttons/Buttons";
export const SideForm = () => {
  const {
    setProductDescription,
    setProductName,
    setProductPrice,
    setProductDiscountPrice,
    productDescription,
    productPrice,
    productName,
    productDiscountPrice,
    setProductImage
  } = useContext(TemplateContext)

  //create reference to hidden input for image upload
  const hiddenFileInput = useRef(null)

  const handleClick = () =>{
    //handle click when button is clicked
    hiddenFileInput.current.click()
  }
  
  const getImage = (e)=>{
    if (e.target.files.length) {
      setProductImage(URL.createObjectURL(e.target.files[0]));
    }
  }
  return (
    <>
      <FormInput
        name="productName"
        labelName="Product Name"
        onChange={(event) => {
          setProductName(event.target.value);
        }}
        placeholder="Product Name"
        type="text"
        value={productName}
      />

      <FormInput
        name="productPrice"
        labelName="Product Price"
        onChange={(event) => {
          setProductPrice(event.target.value);
        }}
        placeholder="Price (In Naira)"
        type="text"
        value={productPrice}
      />
      <TextAreaComponent
        name="productDescription"
        labelName="Product Description"
        onChange={(event) => {
          setProductDescription(event.target.value);
        }}
        placeholder="A short description of the products"
        type="textarea"
        value={productDescription}
      />

      <FormInput
        name="productDiscountPrice"
        labelName="Product Discount Price"
        onChange={(event) => {
          setProductDiscountPrice(event.target.value);
        }}
        placeholder="Product discounted price if any"
        type="text"
        value={productDiscountPrice}
      />
      <input type="file" ref={hiddenFileInput} accept="image/*" style={{display:'none'}} onChange={getImage} />
      <UploadButton onClick={handleClick} text="Upload Image"/>
    </>
  );
}
